import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props){
    super(props);

  }



  render(){
    const benches = this.props.benches.map((bench, idx) =>
      <BenchIndexItem bench={ bench } key={idx}/>);

    return(
      <ul>
        { benches }
      </ul>
    );
  }
}

export default BenchIndex;
