import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import App from './components/App/app'
import InfoForm from './components/InfoForm/infoform'
import Verification from './components/Verification/verification'
import Registration from './components/Registration/registration'
import Nav from './components/Nav/nav'
import Footer from './components/Footer/footer'
import {Provider} from 'react-redux'
import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux';
import routes from './components/routes'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'


// import injectTapEventPlugin from 'react-tap-event-plugin';
//
// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

// const store = createStore(rootReducer, applyMiddleware(ReduxPromise))

// store.dispatch( SIGN_IN_SUCCESS() )


// ReactDOM.render(
// <Provider store={store} >
//   <Router history={browserHistory} routes={routes} />
// </Provider>,
//   document.getElementById('root')
// );


 ReactDOM.render(<App/>, document.getElementById('root'));


// const store = createStore(rootReducer, applyMiddleware(ReduxPromise))
// store.dispatch( fetchUsers() )

// ReactDOM.render(
// 	<Provider store={store} >
// 	  <Router history={browserHistory} routes={routes} />
// 	</Provider>,
// 	  document.getElementById('root')
// );
