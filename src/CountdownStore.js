import {EventEmitter} from 'events'

//State is stored here in the store
class CountdownStore extends EventEmitter {
  constructor(count=5, dispatcher) {
    super() //calling super() w/o args to invoke the parent constructor (EventEmitter)
    this.count = count
    this.dispatcherIndex = dispatcher.register(
        this.dispatch.bind(this)
    )
  }//close constructor()

  get count() {
    return this._count
  }

  dispatch(payload) { //Inherits dispatch() from EventEmitter
    const {type, count} = payload.action // count = the apps's state
    switch(type) {
      case "TICK":
        this._count = this._count - 1
        this.emit("TICK", this._count)
        return true

      case "RESET":
        this._count = this._count
        this.emit("RESET", this._count)
        return true
    }
  }//close dispatch()
}// <CountdownStore />

export default CountdownStore
