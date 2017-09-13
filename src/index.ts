import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NaviSlideJsDirective } from './navi-slide-js.directive';
import { NaviSlideJsComponent } from './navi-slide-js.component';
import { NaviSlideJsButtonComponent } from './navi-slide-js-button.component';
import { NaviSlideJsListComponent } from './navi-slide-js-list.component';
import { NaviSlideJsService } from './navi-slide-js.service';
import { NaviBlurLayerComponent } from './navi-blur-layer.component';

export * from './navi-slide-js.directive';
export * from './navi-slide-js.component';
export * from './navi-slide-js.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    NaviSlideJsDirective,
    NaviSlideJsComponent,
    NaviSlideJsButtonComponent,
    NaviSlideJsListComponent,
    NaviBlurLayerComponent
  ],
  exports: [
    NaviSlideJsDirective,
    NaviSlideJsComponent
  ]
})
export class NaviSlideJsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NaviSlideJsModule,
      providers: [NaviSlideJsService]
    };
  }
}
