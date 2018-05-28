import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodComponent from '../../components/FoodComponent/FoodComponent';
import AddComponent from '../../components/Buttons/AddComponent';
import EditComponent from '../../components/Buttons/EditComponent';
import * as actionTypes from '../../store/actions';
import classes from './FoodComponents.scss';
import ComponentsList from '../ComponentsList/ComponentsList';
import {Link} from 'react-router-dom';


class FoodComponents extends Component {
  render() {
    return (
      <div>
        <AddComponent
          click={this.props.onAddComponent}
        />

          <ComponentsList />
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
