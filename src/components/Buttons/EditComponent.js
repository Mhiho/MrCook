import React, { Component } from 'react';


class EditComponent extends Component {

  state = {
    updated: ''
  }

  editComponentHandler = (event) => {
    this.setState({updated: event.target.value})
  }

  render(){

    return (
      <div>
      <input
        value={this.state.updated}
        onChange = {this.editComponentHandler}
        type="text"
      />
      <button onClick={() => this.props.clicked(this.state.updated)}>
        Edit Component
        </button>
      </div>
    )
  }
}

export default EditComponent;
