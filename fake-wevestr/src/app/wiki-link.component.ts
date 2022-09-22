import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'appWikiLink',
  templateUrl: './wiki-link.component.html',
  styleUrls: ['./wiki-link.component.scss']
})
export class WikiLinkComponent implements OnInit {
  content: string = '';
  header: string ='';
  footer: string ='';
  left: number = 0;
  top: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
