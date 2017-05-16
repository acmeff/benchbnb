import React from 'react';

class FilterForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {min_seating: "1", max_seating: "10"};
  }

  update(property, value) {
    return e => {
      this.setState({[property]: e.target.value}, () => {

        this.props.updateFilterCreator(property, this.state);
      });
    };
  }

  render(){
    return(
      <form>
        <input onChange={this.update('min_seating', this.state.min_seating)}
               type='text'
               placeholder='min_seating'
               value={this.state.min_seating}>
        </input>
        <input onChange={this.update('max_seating', this.state.max_seating)}
               type='text'
               placeholder='max_seating'
               value={this.state.max_seating}>
        </input>

      </form>
    );
  }
}

export default FilterForm;
