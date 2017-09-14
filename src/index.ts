import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NaviSlideJsComponent } from './navi-slide-js.component';
import { NaviSlideJsButtonComponent } from './navi-slide-js-button.component';
import { NaviSlideJsListComponent } from './navi-slide-js-list.component';
import { NaviBlurLayerComponent } from './navi-blur-layer.component';

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
    NaviBlurLayerComponent
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
