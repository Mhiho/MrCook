import React, { Component } from 'react';


class AddComponent extends Component {

  state = {
    component: ''
  }

  onChangeHandler = (component) =>{
    this.setState({component: component})
  }

  addComponentHandler = () =>{
    this.setState({component: ''})
  }

  render(){

    return (
      <div>
      <input
        onChange={e=>{this.onChangeHandler(e.target.value)}}
        value={this.state.component}
        type="text"
      />
      <button onClick={() => {this.props.click(this.state.component),
                              this.addComponentHandler()}}>
        Add
        </button>
      </div>
    )
  }
}

export default AddComponent;
