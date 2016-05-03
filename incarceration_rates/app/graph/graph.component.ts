///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {Component, Input} from 'angular2/core';
import 'rxjs/add/operator/map'; // crappy shim
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import * as d3 from 'd3';

@Component({
    selector: 'graph',
    templateUrl: 'app/graph/graph.component.html'
})
export class GraphComponent {
  @Input() data: number[]
  data_row : [number,number][] = new Array<[number,number]>()
  element : Element = document.createElement('svg')

  constructor() {
    console.log(this.data)
    if (this.data == null) {
      return
    }
    // resort data_row
    for (let i = 0; i < this.data.length; i++) {
        this.data_row.push([i+1, this.data[i]]);
    }
    // define dimensions of graph
    let margins:number[] = [80, 80, 80, 80];
    let width:number = 1000 - margins[1] - margins[3];
    let height:number = 400 - margins[0] - margins[2];

    // Scale functions for x and y values
    let x = d3.scale.linear().domain([0, 38]).range([0, height]);
    let y = d3.scale.linear().domain([0, 50]).range([height, 0]);

    // automatically determining max range can work something like this
    // let y = d3.scale.linear().domain([0, d3.max(data)]).range([h, 0]);
    // create a line function that can convert data[] into x and y points
    let line = d3.svg.line()
      .x(d => x(d[0]))
      .y(d => y(d[1]));

    // Add an SVG element with the desired dimensions and margin.
    let graph = d3.select(this.element)
      .attr("width", width + margins[1] + margins[3])
      .attr("height", height + margins[0] + margins[2])
      .append("svg:g")
      .attr("transform", "translate(" + margins[3] + "," + margins[0] + ")");

    // create yAxis
    let xAxis = d3.svg.axis().scale(x).tickSize(-height);

    // Add the x-axis.
    graph.append("svg:g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    // create left yAxis
    let yAxisLeft = d3.svg.axis().scale(y).ticks(4).orient("left");

    // Add the y-axis to the left
    graph.append("svg:g")
      .attr("class", "y axis")
      .attr("transform", "translate(-25,0)")
      .call(yAxisLeft);

    // Add the line by appending an svg:path element with the data line
    // we created above do this AFTER the axes above so that the line is
    // above the tick-lines
    graph.append("svg:path").data(this.data_row).attr("d", line(this.data_row));
  }
}
