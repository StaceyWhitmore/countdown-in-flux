import React from 'react'
import ReactDOM from 'react-dom'

import CountdownDispatcher from './CountdownDispatcher' //The Dispatcher
import CountdownStore from './CountdownStore' //The Store (where state resides)
import Countdown from './Countdown' //The View

import countdownActions from './countdownActions' //The action creator f(x)

//import * as serviceWorker from './serviceWorker';

const appDispatcher = new CountdownDispatcher()
const actions = countdownActions(appDispatcher) //use the appDispatcher to generate the action creators
const store = new CountdownStore(10, appDispatcher)//register the appDispatcher with the store and set count to 10


//create a Higher Order (render) Function
//which renders the view by using the count passed as an arg and
//passing the action creators to the view as properties.
const render = count => ReactDOM.render(
  <Countdown count={count} {...actions} />,
  document.getElementById('root') //or 'react-container'
)


store.on("TICK", () => render(store.count))
store.on("RESET", () => render(store.count))
render(store.count)


//serviceWorker.unregister();
