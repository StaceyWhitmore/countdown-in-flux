/*
 * When countdown ACTION CREATOR is loaded, the dispatcher is sent an argument.
 * Everytime CLICK or RESET is invoked, the dispatchers handleAction() method is
 invoked, which will "dispatch" the action object.
*/

const countdownActions = dispatcher =>
  ({
    tick(count) {
      dispatcher.handleAction({
        type: 'TICK',
        count: count - 1
      })
    },
    reset(count) {
    dispatcher.handleAction({
      type: 'RESET',
      count
    })
    }
  })

  export default countdownActions
