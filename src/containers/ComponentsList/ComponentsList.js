import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditComponent from '../../components/Buttons/EditComponent';
import * as actionTypes from '../../store/actions';
import {Button} from 'reactstrap';

class ComponentsList extends Component {

  render(){
    return (
      <div>
         {this.props.components.map((component,index)=>(
        <div
          key={component.id}>
          <div>
            component {index+1}: {component.co}
          </div>
          <Button color='danger' onClick={()=>this.props.onDeleteComponent(component.id)}>erase it</Button>
        </div>
        ))
}
        <EditComponent
          clicked={this.props.onEditComponent}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    components: state.manageComponents.components
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onEditComponent: (component, id) => dispatch({type: actionTypes.EDIT_COMPONENT, payload: {componentToReducer: component, ind: id}}),
    onDeleteComponent: (id) => dispatch({type: actionTypes.DELETE_COMPONENT, index: id })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ComponentsList);
