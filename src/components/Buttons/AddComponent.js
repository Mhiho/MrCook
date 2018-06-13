import React, { Component } from 'react';
import {Button, Input} from 'reactstrap';

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
      <Input
        className="form-control"
        onChange={e=>{this.onChangeHandler(e.target.value)}}
        value={this.state.component}
        type="text"
      />
      <Button className="btn-success" onClick={() => {this.props.click(this.state.component);
                              this.addComponentHandler()}}>
        Add
        </Button>
      </div>
    )
  }
}

export default AddComponent;
