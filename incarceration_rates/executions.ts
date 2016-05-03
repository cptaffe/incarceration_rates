import * as d3 from 'd3';
"use strict";

let data = d3.csv("data/cp_executed.csv");
let i:number = 1;

for (let item in data) {

    i++;
}
