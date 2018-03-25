import React from 'react';
import Container from './Container'

const App = ({ numberState, handleAddNumber, handleSubNumber }) => {
  return (
    <div className="App">
      <button onClick={handleSubNumber}>Sub</button>
      <div>{numberState}</div>
      <button onClick={handleAddNumber}>Add</button>
    </div>
  )
}

export default Container(App)
