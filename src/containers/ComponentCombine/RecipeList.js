import React, { Component } from 'react';
import {connect} from 'react-redux';
import EditRecipe from './EditRecipe';


class RecipeList extends Component {
  render(){

    let compons = this.props.recipes.map(recipe =>(
            <div key={recipe.id}>
            <h2>{recipe.re}</h2>
              <ul key={recipe.id}>
              {recipe.comps.map(comp=> comp.toRecipe === true ?
                <li key={comp.id}>{comp.co}</li>
                : null
              )}
              </ul>
              <EditRecipe />
            </div>
      )
    )
    console.log(compons);
    return (
      <div>
        {compons}

      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    recipes: state.manageComponents.recipes,
    components: state.manageComponents.components
  }
}

export default connect(mapStateToProps)(RecipeList);
