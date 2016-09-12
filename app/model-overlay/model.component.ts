import {
  Component,
  EventEmitter,ElementRef
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'click-me',
  templateUrl: './model.component.html',
  inputs: ['menuItems'],
  styles: ['.className{display:block !important}.ng{display:none}'],
  outputs: ['close']

})


export class ClickMeComponent {
  images: Array < any > ;
  clickMessage: string;
  indexValue: number = 0;
  totalLength: number;
  checked: boolean;
  close = new EventEmitter < any > ();
   
  constructor(public imagediv: ElementRef) {

  }
  ngOnInit() {
    var result = document.getElementsByClassName("ng");
    console.log(result);
    this.totalLength=result.length;
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
    var checked = this.checked;
    if (!checked) {
      checked = false;
    }
    this.close.next([checked])
  }
  onNextClick(e:any) {
    
    this.indexValue++;
    if(this.indexValue==this.totalLength){
      e.preventDefault();
    }
  }
  onPreviousClick() {
    this.indexValue--;

  }

}