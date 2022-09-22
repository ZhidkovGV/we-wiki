import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Injector,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { WikiLinkComponent } from './wiki-link.component';

@Directive({
  selector: '[appWikiLink]',
})
export class WikiLinkDirective {
  @Input() appWikiLink = '';
  @Input() header: string;
  @Input() footer: string;


  private componentRef: ComponentRef<any> | null = null;

  constructor(
    private elementRef: ElementRef,
    private viewContainer: ViewContainerRef,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.componentRef === null) {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(
          WikiLinkComponent
        );
      this.componentRef = componentFactory.create(this.injector);

      this.appRef.attachView(this.componentRef.hostView);
      const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);

      this.setTooltipComponentProperties();
    }
  }

  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {

      this.componentRef.instance.content = this.appWikiLink;
      this.componentRef.instance.header = this.header;
      this.componentRef.instance.footer = this.footer;
      const { left, right, bottom } =
        this.elementRef.nativeElement.getBoundingClientRect();
      this.componentRef.instance.left = (right - left) / 2 + left;
      this.componentRef.instance.top = bottom;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (this.componentRef !== null) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
