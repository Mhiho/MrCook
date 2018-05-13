import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodComponent from '../../components/FoodComponent/FoodComponent';
import AddComponent from '../../components/Buttons/AddComponent';
import EditComponent from '../../components/Buttons/EditComponent';
import * as actionTypes from '../../store/actions';
import classes from './FoodComponents.scss';


class FoodComponents extends Component {
  state = {
    show: false
  }

  showTrue = () => {
    this.setState({show: true})
  }
  render() {
    const edit = this.state.show ? this.props.compons.map((comp, index) =>(
        <div
        key={comp.id}>
          <EditComponent
            clicked={this.props.onEditComponent}/>
        </div>
      ))
      : null;

    return (
      <div>
        <AddComponent
          click={this.props.onAddComponent}
        />

          {
            this.props.compons.map((component)=>(
          <div key={component.id}
          >
            <p
            onClick={this.showTrue}
            className={classes.Component}>{component.co}
            </p>
            <button
            onClick={()=>this.props.onDeleteComponent(component.id)}>
              Delete component
            </button>
          </div>
            ))
          }
          {edit}




      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    compons: state.components,
    updates: state.updated
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddComponent: (component) => dispatch({type: actionTypes.ADD_COMPONENT, data: {compToReducer: component}}),
    onDeleteComponent: (id) => dispatch({type: actionTypes.DELETE_COMPONENT, index: id }),
    onEditComponent: (component, id) => dispatch({type: actionTypes.EDIT_COMPONENT, data: {componentToReducer: component, ind: id}})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FoodComponents);
