
import * as React from 'react';
import * as d3 from "d3";

interface waffleProps {

}

class WaffleChart extends React.Component<waffleProps>{
    constructor(props:any) {
        super(props)
    }

    data = [
        { "name": "type 1", "value": 102},
        { "name": "type 2", "value": 65},
        { "name": "type 3", "value": 43},
        { "name": "type 4", "value": 12}
      ];
    componentDidMount(){
        this.createWaffle();
    }

    createWaffle(){
        d3.select("#waffle-cont")
        .append("svg")
        .attr("width",'700px')
        .attr("height", '500px')
        .classed("waffle-svg-cont", true)
            }

    public render() {
        return (
          // Nos basta con un sencillo DIV.
          // Tan sólo queremos su referencia.
          <div id="waffle-cont" />
        );
      }
}

export default WaffleChart;