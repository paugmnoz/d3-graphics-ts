
import * as React from 'react';
import * as d3 from "d3";

interface waffleProps {

}

class WaffleChart extends React.Component<waffleProps>{
    constructor(props:any) {
        super(props)
    }

    data = [{
      "year": 2015,
      "tour": "The Red Bullet",
      "venue": "Rosemont theatre",
      "capacity": 4400,
      "boxes": 18
    },
    {
      "year": 2017,
      "tour": "Wings",
      "venue": "Allstate arena",
      "capacity": 18500,
      "boxes": 74
    },
    {
      "year": 2018,
      "tour": "Love Yourself",
      "venue": "United center",
      "capacity": 23500,
      "boxes": 94
    },
    {
      "year": 2019,
      "tour": "Love Yourself - Speak Yourself",
      "venue": "Soldier Field",
      "capacity": 61500,
      "boxes": 246
    }
  ];
    componentDidMount(){
        this.createWaffle();
    }


    createWaffle(){
    
      
        d3.select("#waffle-cont")
        .append("svg")
        .attr("width", '700px')
        .attr("height", '500px')
        .classed("waffle-svg-cont", true)
        .append("g")
        .selectAll("div")
        .data(this.data)
        .enter()

        console.log(this.data)

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