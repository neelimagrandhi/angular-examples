import { BrowserModule } from '@angular/platform-browser';
import{FormsModule}from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Headercomponent } from './header/header.component';
import { Navcomponent } from './nav/nav.component';
import { Cardcomponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Navcomponent,
    Cardcomponent,
    Headercomponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
