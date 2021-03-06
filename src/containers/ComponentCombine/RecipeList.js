import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import _ from 'lodash';
import classes from './RecipeList.scss';
import {Button} from 'reactstrap';

class RecipeList extends Component {

  render(){

    console.log(this.props.recipes);
        let compons = _.map(this.props.recipes, (recipe,index)=>(
                <div key={recipe.id}>
                <h2>{recipe.re}</h2>
                  <Button
                    color='danger'
                    onClick={()=>this.props.deleteRecipe(recipe.id)}>
                    Erase Recipe</Button>
                  <ul>
                  {_.map(recipe.c, comp=> comp.toRecipe === true ?
                    <li key={comp.id}>{comp.co}</li>
                    : null
                  )}
                  </ul>
                  { _.map(recipe.c, (comp,i)=>
                  <div key={i}>
                  <input
                    onChange={()=>this.props.editRecipes(comp.id,recipe.id)}
                    type="checkbox"
                    key={i}
                    checked={comp.toRecipe}
                  />
                  <label key={i+10000}>{comp.co}</label>
                  </div>
                )}
                  </div>
                ))
        return (
          <div>
            {compons}
          </div>
        )
  }
}


function mapStateToProps(state){
  return {
    recipes: state.createRecipe.recipes,
    components: state.manageComponents.components
  }
}

function mapDispatchToProps(dispatch){
  return{
    editRecipes: (id,ind) => dispatch({type: actionTypes.EDIT_BOOLEAN, payload: {idFromComp: id, idFromRecipe: ind}}),
    deleteRecipe: (id) => dispatch({type: actionTypes.DELETE_RECIPE, index: id})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(RecipeList);
