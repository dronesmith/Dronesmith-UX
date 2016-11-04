import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import App from './components/App/app'
import { fetchUsers } from './actions/index'
import InfoForm from './components/InfoForm/infoform'
import Verification from './components/Verification/verification'
import Registration from './components/Registration/registration'
import Nav from './components/Nav/nav'
import Footer from './components/Footer/footer'
import {Provider} from 'react-redux'
import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux';
import routes from './components/routes'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
  

ReactDOM.render(<App/>, document.getElementById('root'));


// const store = createStore(rootReducer, applyMiddleware(ReduxPromise))
// store.dispatch( fetchUsers() )

// ReactDOM.render(
// 	<Provider store={store} >
// 	  <Router history={browserHistory} routes={routes} />
// 	</Provider>,
// 	  document.getElementById('root')
// );






