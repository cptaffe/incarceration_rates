import {Component} from 'angular2/core';
import 'rxjs/add/operator/map'; // crappy shim
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import * as d3 from 'd3';
import * as _ from 'lodash';
import {GraphComponent} from '../graph/graph.component';

@Component({
    selector: 'graph-list',
    templateUrl: 'app/graph-list/graph-list.component.html',
    directives: [GraphComponent]
})
export class GraphListComponent {
  graphs: number[][] = new Array<number[]>()
  years = _.range(1977, 2015);
  constructor() {
    d3.csv("data/cp_executed.csv", (data) => {
      for (let i in data) {
          let d:number[] = new Array<number>();
          for (let j of this.years) {
              d.push(parseInt(data[i][j]));
          }
          this.graphs.push(d);
      }
    });
  }
}
