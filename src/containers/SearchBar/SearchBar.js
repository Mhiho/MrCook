import React, { Component } from 'react';
import {connect} from 'react-redux';


class SearchBar extends Component {

state = {
  term: ''
}

onChangeHandler= (term)=>{
    this.setState({term})
}

  render(){

        return (
          <div>
            <input type="text"
              onChange={(event)=>this.onChangeHandler(event.target.value)}
            />
            <div>
              { this.props.recipes.map(recipe=>recipe.c.map(comp=>comp.co === this.state.term ?
              <div>
               <p key={recipe.id}>{recipe.re}</p>
                <ol>
                  <li key={comp.id}>{comp.co}</li>
                </ol> </div> : null))
              }
            </div>
            <div>
              { this.props.recipes.map(recipe=>recipe.c.map(comp=>recipe.re === this.state.term ?
              <div>
               <p key={recipe.id}>{recipe.re}</p>
                <ol>
                  <li key={comp.id}>{comp.co}</li>
                </ol> </div> : null))
              }
            </div>
          <button>
          </button>
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



export default connect(mapStateToProps,null)(SearchBar);
