import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <combo-box></combo-box>
    <click-me [test]='test'></click-me>`
})
export class AppComponent {
test:any="testing";

}
