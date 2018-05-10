import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodComponent from '../../components/FoodComponent/FoodComponent';
import AddComponent from '../../components/Buttons/AddComponent';
import * as actionTypes from '../../store/actions';

class FoodComponents extends Component {
  render() {
    return (
      <div>
        <AddComponent
          text="Add component"
          click={this.props.onAddComponent}
        />
        <ul>
          {
            this.props.compons.map(component=>(
          <FoodComponent
            key={component.id}
            comp= {component.co}
          />
            ))
          }
          </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    compons: state.components
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddComponent: (component) => dispatch({type: actionTypes.ADD_COMPONENT, data: {compToReducer: component}})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FoodComponents);
