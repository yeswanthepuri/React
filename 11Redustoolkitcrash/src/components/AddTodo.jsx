import React,{useState} from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoslice';
function AddTodo() {

    const [input,setinput] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setinput('');
    }
  return (
    <form onSubmit={handleSubmit} className='space-x-3 mt-12'>
    <input className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-400 focus:ring-2
     focus:ring-indigo-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
     ' value={input} onChange={(e) => setinput(e.target.value)} placeholder='Write Todo...'/>
     <button type='submit' className='text-white bg-indigo-400 border-0 
     py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg'>Add Todo</button>
    </form>
  )
}

export default AddTodo