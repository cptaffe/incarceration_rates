///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {Component} from 'angular2/core';
import 'rxjs/add/operator/map'; // crappy shim
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {GraphListComponent} from './graph-list/graph-list.component'

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [GraphListComponent]
})
export class AppComponent {}
