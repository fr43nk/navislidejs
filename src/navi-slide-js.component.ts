import { Component, ElementRef, HostListener, ViewChild, Input, ViewEncapsulation, Renderer2, OnDestroy } from '@angular/core';

import {NaviSlideJsButtonComponent} from './navi-slide-js-button.component';
import {NaviSlideJsListComponent} from './navi-slide-js-list.component';
import {NaviBlurLayerComponent} from './navi-blur-layer.component';

@Component({
  selector: 'navi-slide-js',
  templateUrl: './navi-slide-js.component.html',
  styleUrls: ['./scss/navi-slide-js.component.scss']
})
export class NaviSlideJsComponent {

  private onButonChlickedSubscription: any;
  private onReadyChangeSubscription: any;
  private listId: string = "navigation_list";
  private entries: any[] = [];

  @ViewChild(NaviSlideJsButtonComponent) buttonElm: NaviSlideJsButtonComponent;
  @ViewChild(NaviSlideJsListComponent) listElm: NaviSlideJsListComponent;
  @ViewChild(NaviBlurLayerComponent) blurLayer: NaviBlurLayerComponent;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    this.entries = [
      {url: "#/", name: "Home"},
      {url: "#/", name: "About"},
      {url: "#/", name: "Imprint"},
    ];
  }

  ngOnDestroy()
	{
		this.onReadyChangeSubscription.unsubscribe();
	}

  ngAfterViewInit()
  {
    //console.log("Elm:", this.renderer.selectRootElement("body"));

    this.blurLayer.hide();

    this.onButonChlickedSubscription = this.buttonElm.onButtonClicked.subscribe((state) => {
      if( state == true )
      {
        this.setBlurLayer();
      }
      else
      {
        this.clearBlurLayer();
      }
    });

    this.onReadyChangeSubscription = this.blurLayer.onReadyChanged.subscribe((state) => {
      this.buttonElm.setReady(state);
    });
  }

  ngAfterViewChecked()
  {
    let node = this.renderer.parentNode(this.el.nativeElement);
    while(node!==null)
    {
      if(node.tagName.toLowerCase() == "body")
        break;
      node = this.renderer.parentNode(node);
    }

    //let body = this.renderer.selectRootElement("app-root");
    this.renderer.appendChild(node, this.blurLayer.element().nativeElement);
  }

  setBlurLayer()
  {
    this.blurLayer.show();
  }

  clearBlurLayer()
  {
    this.blurLayer.hide();
  }

}
