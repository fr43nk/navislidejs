import { Component, ElementRef, HostListener, ViewChild, Input, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'navi-slide-js-list',
	templateUrl: './navi-slide-js-list.component.html',
  styleUrls: ['./scss/list.component.scss']
})
export class NaviSlideJsListComponent {

	buttonClickedEv : EventEmitter<any> = new EventEmitter<any>();
	private listId: string = "navigation_list";

	@Input() listEntries: any;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit()
  {
    console.log(this.el);
	}
	
	toggleNavigation()
	{

	}


}
