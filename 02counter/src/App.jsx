import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setcounter] = useState(15);

  var addValue = () => {
    setcounter((preCount)=>{
      preCount = preCount + 1;
      console.log(`I can do more ${preCount}`);
      return preCount;
    });
  }
  var removeValue = () => {
    setcounter((preCount)=>{
      preCount = preCount - 1;
      console.log(`I can do more ${preCount}`);
      return preCount;
    });
  }
  return (
    <>
      <h1>React Course {counter}</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={removeValue}>Remove value</button>
      <p>Footer {counter}</p>
    </>
  )
}

export default App
