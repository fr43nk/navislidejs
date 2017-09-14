import { Component, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
	selector: 'navi-slide-js-list',
	templateUrl: './navi-slide-js-list.component.html',
	styleUrls: ['./scss/list.component.scss'],
	animations: [
		trigger("listAnimation", [
			state("false", style( {transform: 'translateX(-110%)'} )),
			state("true", style( {transform: 'translateX(0em)', 'z-index': 999 } )),
			transition("* => *", animate("0.6s ease-in-out"))
		])
	]
})
export class NaviSlideJsListComponent {

	buttonClickedEv : EventEmitter<any> = new EventEmitter<any>();
	private listId: string = "navigation_list";
	private visible: boolean = false;

	@Input() listEntries: any;

  constructor() {
  }

  ngAfterViewInit()
  {
	}
	
	setVisible(visible:boolean)
	{
		this.visible = visible;
	}

	isVisible()
	{
		return this.visible;
	}

}
