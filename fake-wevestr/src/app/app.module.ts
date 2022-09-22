import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockPerformanceComponent } from './mock-performance/mock-performance.component';
import { WikiLinkDirective } from './wiki-link.directive';

@NgModule({
  declarations: [
    AppComponent,
    MockPerformanceComponent,
    WikiLinkDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
