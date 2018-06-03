import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class EditRecipe extends Component{



  render(){
    const base = this.props.recipes.map(recipe=>recipe.comps.filter(comp=> function(x){return x==comp.id}.length > 1));
    console.log(base);
    return(
      <div>
        <form>
         { base.map(comp=>(
          <div>
        <input
          onChange={()=>this.props.editRecipes(comp.id)}
          type="checkbox"
          key={comp.id}
          checked={comp.toRecipe}
        />
        <label key={comp.id}>{comp.co}</label>

        </div>
      ))  }
        </form>

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
    addComToRecipe: (toRecipe, id) => dispatch({type: actionTypes.ADD_COM_TO_RECIPE, payload: {toRecipeInReducer: toRecipe, idInReducer: id}}),
      editRecipes: (id) => dispatch({type: actionTypes.EDIT_BOOLEAN, payload: {idInReducer: id}})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditRecipe);
