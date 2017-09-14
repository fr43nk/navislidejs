import { Component, Type, ElementRef, HostListener, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
	selector: "navi-slide-js-blur-layer",
	template: `
		<div class="blur" [@layerAnimation]="showBlur" (@layerAnimation.start)="onTransitionStartEvent($event)" (@layerAnimation.done)="onTransitionEndEvent($event)" ></div>`,
	styleUrls: ['./scss/blur-layer.component.scss'],
	animations: [
		trigger('layerAnimation', [
			state("false", style({opacity: 0})),
			state("true", style({opacity: 1, 'z-index': 998})),
			transition("* => *", animate("100ms ease-in"))
		])
	]
})
export class NaviSlideJsBlurLayerComponent {

	onReadyChanged : EventEmitter<any> = new EventEmitter<any>();

	private isAnimating: boolean = false;
	private isReady: boolean = true;
	private showBlur: boolean = false;
	
	constructor(private el: ElementRef)
	{
		console.log(this.el.nativeElement);
	}

	ngAfterViewInit()
	{
	}

	public hide()
	{
		this.showBlur = false;
	}

	public show()
	{
		this.showBlur = true;
		let that = this;
	}

	public element()
	{
		return this.el;
	}

	onTransitionStartEvent(){
		this.isAnimating = true
	}

	onTransitionEndEvent(){
		if( this.isAnimating === true )
		{
			this.isAnimating = false;
			this.isReady = true;
			this.onReadyChanged.emit(this.isReady);
		}
	}
}