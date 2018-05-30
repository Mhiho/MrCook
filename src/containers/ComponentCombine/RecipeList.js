import React, { Component } from 'react';
import {connect} from 'react-redux';



class RecipeList extends Component {
  render(){

    const compons = this.props.recipes.map(recipe => recipe.comps.map(comp=>(
            <div>
            <h2>recipe.re</h2>
            <ul>
              <li key={comp.id}>{comp.co}</li>
            </ul>
            </div>
      )
    )
    )
    const recipes = this.props.recipes.map(recipe =>(
      <div>
        <h1>{recipe.re}</h1>
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
  return{
    recipes: state.createRecipe.recipes
  }
}

export default connect(mapStateToProps)(RecipeList);
