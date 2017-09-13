import { Component, Type, ElementRef, Renderer2, HostListener, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
	selector: "blur-layer",
	template: `
		<div [@layerAnimation]="showBlur" (@layerAnimation.start)="onTransitionStartEvent($event)" (@layerAnimation.done)="onTransitionEndEvent($event)" ></div>`,
	styleUrls: ['./scss/blur-layer.component.scss'],
	animations: [
		trigger('layerAnimation', [
			state("false", style({opacity: 0})),
			state("true", style({opacity: 1})),
			transition("* => *", animate("100ms ease-in"))
		])
	]
})
export class NaviBlurLayerComponent {

	onReadyChanged : EventEmitter<any> = new EventEmitter<any>();

	private className: string;
	private isAnimating: boolean = false;
	private doHide: boolean = false;
	private isReady: boolean = true;
	private showBlur: boolean = false;
	
	constructor(private el: ElementRef, private renderer: Renderer2)
	{
		console.log(this.el.nativeElement);
	}

	ngAfterViewInit()
	{
		this.renderer.addClass(this.el.nativeElement.children[0], "blur");
	}

	public hide()
	{
		//this.renderer.removeClass(this.el.nativeElement.children[0], "opacity-1");
		this.showBlur = false;
	}

	public show()
	{
		this.showBlur = true;
		let that = this;
		//this.renderer.addClass(this.el.nativeElement.children[0], "show-blur");
		//setTimeout(function() {
		//	that.renderer.addClass(that.el.nativeElement.children[0], "opacity-1");
		//	console.log("Added Opacity class");
		//}, 1000);
	}

	public element()
	{
		return this.el;
	}

	onTransitionStartEvent(){
		this.isAnimating = true
		console.log("Animation start");
	}

	onTransitionEndEvent(){
		if( this.isAnimating === true )
		{
			this.isAnimating = false;
			this.isReady = true;
			this.onReadyChanged.emit(this.isReady);
		}
		console.log("Animation stop");
	}
}