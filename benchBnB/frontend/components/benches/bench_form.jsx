import React from 'react';

class BenchForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      description: '',
      seating: 0,
      lng: this.props.lng,
      lat: this.props.lat
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let bench = {
      bench: this.state
    };
    this.props.addBench(bench).then(this.props.history.push('/'));
  }

  render(){
    return(
      <form>
        <input onChange={this.update('description')}
               type='text'
               value={this.state.description}
               placeholder='description'>
       </input>
       <br/>
       <input onChange={this.update('seating')}
              type='text'
              value={this.state.seating}
              placeholder='seating'>
      </input>
      <br/>

      <input onChange={this.update('lng')}
             type='text'
             disabled
             value={this.state.lng}
             placeholder='longitute'>
     </input>
     <br/>

     <input onChange={this.update('lat')}
            type='text'
            disabled
            value={this.state.lat}
            placeholder='latitude'>
    </input>
    <br/>
    <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default BenchForm;
