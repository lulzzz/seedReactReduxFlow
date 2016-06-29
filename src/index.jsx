import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import routes from './routes.jsx'
import _reducer_ from './reducers/index.js'

let store = createStore(_reducer_)

render(
	<Provider store={store}>
  		<Router routes={routes} history={browserHistory}/>
  	</Provider>, 
  	document.getElementById('app')
)

