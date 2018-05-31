import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class EditRecipe extends Component{



  render(){
    const obj = this.props.components.map(comp=>{
      comp
    })
    return(
      <div>
        <form>
        { this.props.components.map(comp=>(
          <div>
        <input
          onChange={(e)=>this.props.editToRecipe(comp.toRecipe == e.target.value, comp.id)}
          type="checkbox"
          key={comp.id}
          checked={comp.toRecipe}
        />
        <label key={comp.id}>{comp.co}</label>

        </div>
      ))
      }
        </form>
        <button onClick={()=>this.props.changeRecipe(obj)}>
          Edit Your Recipe
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    components: state.manageComponents.components,
    recipes: state.manageComponents.recipes
  }
}

function mapDispatchToProps(dispatch){
  return{
    editToRecipe: (toRecipe, id) => dispatch({type: actionTypes.EDIT_BOOLEAN, payload: {toRecipeInReducer: toRecipe, idInReducer: id}}),
    changeRecipe: (object) => dispatch({type: actionTypes.EDIT_RECIPE, payload:{objectToAdd: object }})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditRecipe);
