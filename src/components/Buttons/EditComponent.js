import React, { Component } from 'react';
import {connect} from 'react-redux';

class EditComponent extends Component {

  state = {
    updated: ''
  }

  editComponentHandler = (event) => {
    this.setState({updated: event.target.value})
  }

  render(){

    return ( this.props.components.map((c,index)=>{
      return (
      <div>
      <input
        value={this.state.updated[c.id]}
        onChange = {this.editComponentHandler}
        type="text"
      />
      <button onClick={() => this.props.clicked(this.state.updated, c.id)}>
      edit component nr {index+1}
        </button>
      </div>
    )
    }
    )
  )

  }
}

function mapStateToProps(state) {
  return{
    components: state.components
  }
}

export default connect(mapStateToProps)(EditComponent);
