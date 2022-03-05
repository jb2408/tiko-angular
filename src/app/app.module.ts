import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePopupComponent } from './features/welcome-popup/welcome-popup.component';
import { FeaturesModule } from './features/features/features.module';
import { SharedModule } from './shared/shared/shared.module';
import { AllMaterialsModuleModule } from './material/all-materials-module/all-materials-module.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    SharedModule,
    AllMaterialsModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
