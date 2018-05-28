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

    return ( this.props.components.map(c=>{
      return (
      <div>
      <input
        value={this.state.updated}
        onChange = {this.editComponentHandler}
        type="text"
      />
      <button onClick={() => this.props.clicked(this.state.updated, c.id)}>
      save
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
