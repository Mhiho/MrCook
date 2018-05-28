import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditComponent from '../../components/Buttons/EditComponent';
import * as actionTypes from '../../store/actions';

class ComponentsList extends Component {
  state = {
    show: {}
  }
  showContentFunction(index) {
      const itemToShow = {
        ...this.state.show,
        [index]: true
      };
      this.setState({show: itemToShow})
    }

  render(){
    console.log(this.props.components);

    return (
      <div>
         {this.props.components.map((component,index)=>(
          <div
            key={component.id}>
            component {index+1}: {component.co}
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
    components: state.components
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onEditComponent: (component, id) => dispatch({type: actionTypes.EDIT_COMPONENT, payload: {componentToReducer: component, ind: id}})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ComponentsList);
