import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NaviSlideJsComponent } from './navi-slide-js.component';
import { NaviSlideJsButtonComponent } from './navi-slide-js-button.component';
import { NaviSlideJsListComponent } from './navi-slide-js-list.component';
import { NaviSlideJsBlurLayerComponent } from './navi-slide-js-blur-layer.component';

export * from './navi-slide-js.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    NaviSlideJsComponent,
    NaviSlideJsButtonComponent,
    NaviSlideJsListComponent,
    NaviSlideJsBlurLayerComponent
  ],
  exports: [
    NaviSlideJsComponent
  ]
})
export class NaviSlideJsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NaviSlideJsModule,
    };
  }
}
