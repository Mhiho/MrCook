import React, {Component} from 'react';
import {connect} from 'react-redux';

class ComponentCombine extends Component {
  state={
    checkboxStatus: false
  }

  changeStatusHandler = () =>{
    this.setState({checkboxStatus: !this.state.checkboxStatus})
  }

  render(){
    return (
      <div>
        <form>
        { this.props.components.map((component,index)=>(
          <div key={index}>
          <input

            onClick={()=>this.changeStatusHandler}
            type="checkbox"
          />
          <label>{component.co}</label>
          </div>
        ))}
        </form>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return{
    components: state.manageComponents.components
  }
}

export default connect(mapStateToProps)(ComponentCombine);
