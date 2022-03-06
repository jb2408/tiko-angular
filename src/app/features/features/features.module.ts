import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMaterialsModuleModule } from 'src/app/material/all-materials-module/all-materials-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AllMaterialsModuleModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ]
})
export class FeaturesModule { }
