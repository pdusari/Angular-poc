
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'click-me',
  templateUrl: './model.component.html',
  inputs: ['test']

})


export class ClickMeComponent {
  images = [
    { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg' },
    { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg' },
    { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg' },
    { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg' },
    { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg' },
    { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg'}
  ];
  clickMessage: string;
  constructor() {

  }
  ngOnInit(){
       
       alert("I am in Init");
    }
/* OpenImageModel(imageSrc,images) {
   var imageModalPointer;
   for (var i = 0; i < images.length; i++) {
          if (imageSrc === images[i].img) {
            imageModalPointer = i;
            break;
          }
     }
   this.openModalWindow = true;
   this.images = images;
   this.imagePointer  = imageModalPointer;
 }*/

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  onNextClick() {
    alert("I am here");
  }
  onPreviousClick(){

  }
}


