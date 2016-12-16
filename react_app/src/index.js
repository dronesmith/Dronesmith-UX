import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/app'


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
