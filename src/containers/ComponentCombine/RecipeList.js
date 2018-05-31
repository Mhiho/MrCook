import React, { Component } from 'react';
import {connect} from 'react-redux';



class RecipeList extends Component {
  render(){

    const compons = this.props.recipes.map(recipe =>(
            <div key={recipe.id}>
            <h2>{recipe.re}</h2>
              <p>{recipe.comps.map(comp=>comp.co).join(', ')}</p>
            </div>
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
