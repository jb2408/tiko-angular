import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePopupComponent } from './features/features/welcome-popup/welcome-popup.component';
import { FeaturesModule } from './features/features/features.module';
import { SharedModule } from './shared/shared/shared.module';
import { AllMaterialsModuleModule } from './material/all-materials-module/all-materials-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TestpageComponent } from './pages/testpage/testpage.component';
import { MainHeaderComponent } from './shared/main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePopupComponent,
    HomepageComponent,
    TestpageComponent,
    MainHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    SharedModule,
    AllMaterialsModuleModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
