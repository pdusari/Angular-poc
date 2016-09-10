import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ComboComponent }  from './combo/combo.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,ComboComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
