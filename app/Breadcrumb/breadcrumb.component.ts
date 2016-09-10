import {Component} from 'angular2/core';
import {NGL_DIRECTIVES, provideNglConfig} from 'ng-lightning/ng-lightning';

@Component({
  moduleId:module.id,
  selector: 'bread-crumb',
  directives: [NGL_DIRECTIVES],
  templateUrl: './breadcrumb.component.html'
})
export class Angular2Breadcrumb {}
bootstrap(Angular2Breadcrumb, [provideNglConfig()]);
