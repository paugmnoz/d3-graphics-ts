
import * as React from 'react';
import * as d3 from "d3";
import { ResponsiveWaffle } from '@nivo/waffle'

interface waffleProps {

}

class WaffleChart extends React.Component{
    

    data = [
      {
        "id": "men",
        "label": "men",
        "value": 29.578576611230588,
        "color": "#468df3"
      },
      {
        "id": "women",
        "label": "women",
        "value": 0.588575533698535,
        "color": "#ba72ff"
      },
      {
        "id": "children",
        "label": "children",
        "value": 27.31733112966964,
        "color": "#a1cfff"
      }
    ];

    componentDidMount(){
       // this.createWaffle();
       console.log(this.data)
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
          //<div id="waffle-cont" />
          <div className="waffle-cont" >  
            <ResponsiveWaffle
              data={this.data}
              total={100}
              rows={18}
              emptyOpacity={0.45}
              columns={14}
              margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
              borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
              animate={true}
              motionStiffness={90}
              motionDamping={11}
              
            /> 
  

          </div>
         
        );
      }
}

export default WaffleChart;