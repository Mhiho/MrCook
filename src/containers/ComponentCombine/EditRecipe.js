import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actionTypes from '../../store/actions';


class EditRecipe extends Component {
  render() {
    return (
    <form>
     { _.map(this.props.recipes, recipe=> _.map(recipe.c, comp=>(
      <div>
    <input
      onChange={()=>this.props.editRecipes(comp.id,recipe.id)}
      type="checkbox"
      key={comp.id}
      checked={comp.toRecipe}
    />
    <label key={comp.id}>{comp.co}</label>

    </div>
  )))  }
    </form>
  )
}
}

function mapStateToProps(state) {
  return{
    recipes: state.createRecipe.recipes,
    components: state.manageComponents.components
  }
}

function mapDispatchToProps(dispatch){
  return{
    editRecipes: (id,ind) => dispatch({type: actionTypes.EDIT_BOOLEAN, payload: {idFromComp: id, idFromRecipe: ind}})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditRecipe);
