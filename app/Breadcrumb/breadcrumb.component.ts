import { Component,OnInit } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'breadcrumb-html',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.css'],
    inputs:['menuItems']
})
export class BreadcrumbComponent { 
    menuItems:Array < any > ;
    showStyle: boolean;

    ngOnInit() {
        console.log(this.menuItems);
        //this.init();
    }
    // private init() {
    //     this.showStyle=false;
    // }

}
