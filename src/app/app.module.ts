import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {CategoryModule} from "./category/category.module";

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoryModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
