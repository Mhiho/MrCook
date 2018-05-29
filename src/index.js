import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ComponentCombine from './containers/ComponentCombine/ComponentCombine';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = createStore(rootReducer)


ReactDOM.render(<Provider store={store} >

                  <BrowserRouter>
                  <div>
                    <Switch>
                      <Route path="/newRecipe" component={ComponentCombine} />
                      <Route path="/" component={App}/>
                    </Switch>
                  </div>
                  </BrowserRouter>

                </Provider>, document.getElementById('root'));
registerServiceWorker();
