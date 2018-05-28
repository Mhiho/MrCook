import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditComponent from '../../components/Buttons/EditComponent';
import * as actionTypes from '../../store/actions';

class ComponentsList extends Component {
  state = {
    isEditing: {}
  }
  trueEdit(index) {
    const showItem ={
      ...this.state.isEditing,
      [index]: true
    };
      this.setState({isEditing: showItem})
    }
  falseEdit(index) {
    this.setState({isEditing: {[index] : false}})
  }

  render(){
    console.log(this.props.components);
    return (
         this.props.components.map((component,index)=>(
          <div>
            <div
            key={component.id}>
            {component.co}
            </div>
            <button
              onClick={()=>this.trueEdit(component.id)}>edit
            </button>
          {   this.state.isEditing[component.id] ===true ?
            <EditComponent
              clicked={this.props.onEditComponent}/>
            : null}
          </div>


        ))

    )

  }
}

function mapStateToProps(state) {
  return {
    components: state.components
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onEditComponent: (component, id) => dispatch({type: actionTypes.EDIT_COMPONENT, payload: {componentToReducer: component, ind: id}})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ComponentsList);
