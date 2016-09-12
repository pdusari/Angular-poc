import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <combo-box></combo-box>
    <click-me [menuItems]=menuItems></click-me>`
})
export class AppComponent {
menuItems=[
    { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg' },
    { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg' },
    { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg' },
    { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg' },
    { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg' },
    { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg'}
  ];

}
