import React, { Component } from 'react';


class AddComponent extends Component {

  state = {
    component: ''
  }

  addComponentHandler = (event) => {
    this.setState({component: event.target.value})
  }

  render(){

    return (
      <div>
      <input
        value={this.state.component}
        onChange = {this.addComponentHandler}
        type="text"
      />
      <button onClick={() => this.props.click(this.state.component)}>
        Add
        </button>
      </div>
    )
  }
}

export default AddComponent;
