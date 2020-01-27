
import * as React from 'react';
interface waffleProps {

}

class WaffleChart extends React.Component<waffleProps>{
    constructor(props:any) {
        super(props)
    }

    public render() {
        return (
          // Nos basta con un sencillo DIV.
          // Tan sólo queremos su referencia.
          <div className="waffle-cont" />
        );
      }
}