import { Directive, ElementRef, HostListener, ViewChild, Input } from '@angular/core';

@Directive({
  selector: '[NaviSlideJs]'
})
export class NaviSlideJsDirective {

  @Input() buttonNameId: string;
  buttonElm: ElementRef;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit()
  {
    console.log(this.el);
  }
}
