import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class EditRecipe extends Component{
  render(){
    const compons =
    this.props.components.filter(c=> c.toRecipe === true);
    return(
      <div>
        <form>
        { this.props.components.map(comp=>(
          <div>
        <input
          onChange={()=>this.props.editToRecipe(comp.toRecipe, comp.id)}
          type="checkbox"
          key={comp.id}
        />
        <label key={comp.id}>{comp.co}</label>

        </div>
      ))
      }
        </form>
        <button onClick={()=>this.props.changeRecipe(compons,this.props.components.map(c=>c.id))}>
          Edit Your Recipe
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    components: state.manageComponents.components
  }
}

function mapDispatchToProps(dispatch){
  return{
    editToRecipe: (toRecipe, id) => dispatch({type: actionTypes.EDIT_BOOLEAN, payload: {toRecipeInReducer: toRecipe, idInReducer: id}}),
    changeRecipe: (toRecipe, id) => dispatch({type: actionTypes.EDIT_RECIPE, payload:{toRecipeInReducer: toRecipe, idInReducer: id}})
  }
}

export default connect(mapStateToProps)(EditRecipe);
