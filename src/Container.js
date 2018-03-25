import { withState, compose, withHandlers } from 'recompose'

const numberState = withState('numberState', 'setNumberState', 10)

const handleEvent = withHandlers({
  handleAddNumber:({ numberState, setNumberState }) => event => {
    setNumberState(numberState + 1)
  },
  handleSubNumber:({ numberState, setNumberState }) => event => {
    setNumberState(numberState - 1)
  }
})

export default compose(
  numberState,
  handleEvent
)
