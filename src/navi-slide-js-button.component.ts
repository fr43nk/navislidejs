import { Component, HostListener, EventEmitter, ViewEncapsulation, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
	selector: 'navi-slide-js-button',
	templateUrl: './navi-slide-js-button.component.html',
	styleUrls: ['./scss/button.component.scss'],
	animations: [
		trigger("buttonLine1", [
			state("false", style({transform: 'translateY(0.6em) rotateZ(45deg)'})),
			state("true", style({transform: 'translateY(0.0em) rotateZ(0deg)'})),
			transition("* => *", animate("100ms ease-in"))
		]),
		trigger("buttonLine2", [
			state("false", style({opacity: 0})),
			state("true", style({opacity: 1})),
			transition("* => *", animate("100ms ease-in"))
		]),
		trigger("buttonLine3", [
			state("false", style({transform: 'translateY(-0.6em) rotateZ(-45deg)'})),
			state("true", style({transform: 'translateY(0.0em) rotateZ(0deg)'})),
			transition("* => *", animate("100ms ease-in"))
		])
	]
})
export class NaviSlideJsButtonComponent {

	onButtonClicked : EventEmitter<any> = new EventEmitter<any>();
	private isTouchActive: boolean = false;
	private isReady: boolean = true;
	private isHidden: boolean = true;
	private hasTransitionEvs: boolean = true;
	private buttonId: string = "navigation_button";

	constructor() {
	}

	ngAfterViewInit()
	{
	}

	addClickOrTouch()
	{
		if( this.isReady === true || this.hasTransitionEvs === false )
		{
			this.isReady = false;
			this.onButtonClicked.emit(this.isHidden);
			this.isHidden = !this.isHidden;
		}
	}

	setReady(state:boolean)
	{
		this.isReady = state;
	}

	@HostListener("touchend") onTouchEndEvent(){
		if( this.isTouchActive === false )
		{
			this.isTouchActive = true;
			this.addClickOrTouch();
			setTimeout(() => { this.isTouchActive = false; console.log("reset lock")}, 600);
		}
	}

	@HostListener("click") onClickEvent(){
		if( this.isTouchActive === false )
		{
			this.addClickOrTouch();
		}
	}
}
