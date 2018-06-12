import React, { Component, Fragment, Children } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import { normalize, schema, arrayOf } from 'normalizr';
import _ from 'lodash';

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
              {this.props.terms.map(one=> one ?

              <div>
                {this.props.recipes.map(recipe=>recipe.c.map(el=>el.co == one ?
                  <div key={recipe.id}>
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
