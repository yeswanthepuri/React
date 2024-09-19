import { useState, useEffect, useRef, useMemo, useCallback, useReducer } from 'react'
import Header from './components/header';
import './App.css'
import Footer from './components/Footer';
import Profile from './components/Profile';

function App() {
  //Use State
  const [value, setvalue] = useState(0);
  const [count, setCount] = useState(0);
  //Use Effect
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(c => c + 1)
  //   }, 1000)
  // }, [count]);
  //useRef 
  var rendercount = useRef(0);
  useEffect(() => {
    rendercount.current = rendercount.current + 1;
  });
  //useRef To access the Dom Element
  const inputelement = useRef();

  //useMemo hook
  const [number, setnumber] = useState(0);
  const [counter, setCounter] = useState(0);
  function cubeNumb(numb) {
    console.log('cal done');
    return Math.pow(numb, 3);
  }
  const result = useMemo(() => { return cubeNumb(number) }, [number]);
  //useCallback
  const newfu = useCallback((e) => {
    console.warn(`Executing ${e}`);
  }, [number]);

  //useReducer
const initalState = {count:0};
const reducer = (state,action) => {
  switch(action.type){
    case 'increment':
      return {count:state.count+1}
    case 'decrement':
      return {count:state.count-1}
    case 'input':
      return {count:Number(action.payload)}
    default:
      return state
  }
}

  const [state, dispatch] = useReducer(reducer,initalState);
  return (
    <>
      <Header newfu={newfu} number={number} />
      <h1> Render Count {rendercount.current} </h1>

      <button onClick={() => { setvalue(pre => pre - 1) }}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => { setvalue(pre => pre + 1) }}>+1</button>
      <br />
      <input type="text" ref={inputelement} />
      <button onClick={() => {
        inputelement.current.style.background = "red";
        console.log(inputelement.current.value);
      }}>click me</button>
      <br />
      <input type='number' value={number} onChange={(e) => { setnumber(e.target.value) }}></input>
      <h1>
        {result}
      </h1>
<h1>{state.count}</h1>
<button onClick={() => dispatch({type:'increment'})}>Increment</button>
<button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
<input type='string'
value={state.count} onChange={(e)=>dispatch({type:'input',payload: Number(e.target.value)})}>
</input>
      <Footer></Footer>
      <Profile></Profile>
    </>
  )
}

export default App
