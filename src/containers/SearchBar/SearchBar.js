import React, { Component, Fragment, Children } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import _ from 'lodash';
import classes from './SearchBar.scss';

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
              className= "form-control-sm"
              onChange={(event)=>this.onChangeHandler(event.target.value)}
            />
            <button
              className="btn-success"
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
              {this.props.terms.map((one,i)=> one ?

              <div key={i}>
                {this.props.recipes.map(recipe=>recipe.c.map(el=>el.co == one ?
                  <h2 key={recipe.id}>
                    {recipe.re}
                  </h2>
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
