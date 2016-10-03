import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ComboComponent} from './combo/combo.component';
import { SelectComponent }  from './combo/select.component';
import { BreadcrumbComponent }  from './breadcrumb/breadcrumb.component';
import { PasswordComponent }  from './password-strength/password.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,ComboComponent,SelectComponent,BreadcrumbComponent,PasswordComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
