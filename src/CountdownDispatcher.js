/*
 To quote the Highlander-- "There can only be one". This is also true
 of the Dispatcher.
 The Dispatcher takes the action, packages it with some info about where the
 action was generated, and then sends it along to the proper store(s) that will
 handle the action.
*/
import {Dispatcher} from 'flux'

class CountdownDispatcher extends Dispatcher {
  handleAction(action) {
    console.log('dispatching action:', action)
    this.dispatch({
      source: 'VIEW_ACTION',
      action
    })
  }//close action handler
}//close <CounddownDispatcher />

export default CountdownDispatcher
