import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';


class SearchBar extends Component {

state = {
  term: ''
}

onChangeHandler= (term)=>{
    this.setState({term})
}

  render(){
    const list =
     this.props.terms.map((term,index)=>(
       <p key={index}>{term}</p>
     )
   )
   const arrays = this.props.recipes.map(recipe=>recipe.c.map(comp=>comp.co));
   const filtered = arrays.map(array=>array.filter(el => this.props.terms.includes(el)))
   console.log(filtered);
        return (
         <div>
            <input type="text"
              onChange={(event)=>this.onChangeHandler(event.target.value)}
            />
            <button
              onClick={()=>this.props.addTermToCompare(this.state.term)}>
              Search ingredients
            </button>
          <div>
               <p>Searched ingredients:</p>
               <div>
                {list}
               </div>
          </div>
            <div>
            What you can cook from ingredients above:
              {filtered.map(one=> one ?

              <div>
                {this.props.recipes.map(recipe=>recipe.c.map((comp,index)=>comp.co == one ?
                  <div>
                    {recipe.re}
                  </div>
                  : null
                ))}
              </div>
               : null )


              }

            </div>
        </div>
      )
    }
  }


function mapStateToProps(state){
  return {
    recipes: state.createRecipe.recipes,
    components: state.manageComponents.components,
    terms: state.addTerm.terms
  }
}

function mapDispatchToProps(dispatch){
  return{
    addTermToCompare: (term) => dispatch({type: actionTypes.ADD_TERM, termInReducer: term })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
