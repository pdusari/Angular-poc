import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ComboComponent }  from './combo/combo.component';
import { ClickMeComponent }  from './model-overlay/model.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,ComboComponent,ClickMeComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
