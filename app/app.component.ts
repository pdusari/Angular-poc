import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <ng-select [options]=options></ng-select>
    <breadcrumb-html [menuItems]=menuItems></breadcrumb-html>
    <br />
    <input type="text" (input)=passitem($event) value="" />
    <password-strength [password]=password></password-strength>`
})
export class AppComponent { 
    password:any;

     options = [
        {
            value: 'a',
            label: 'Alpha'
        },
        {
            value: 'b',
            label: 'Beta'
        },
        {
            value: 'c',
            label: 'Gamma'
        }
    ];
    menuItems= [
        {
            class: '',
            menu: 'Alpha'
        },
        {
            class: '',
            menu: 'Beta'
        },
        {
            class: 'active',
            menu: 'Gamma'
        }
    ];
    passitem(event:any){
       this.password=event.target.value
    }

}
