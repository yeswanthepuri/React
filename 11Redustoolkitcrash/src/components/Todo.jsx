import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { removeTodo } from '../features/todo/todoslice';

function Todo() {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();
    return (
        <div className='bg-white/20 rounded-lg p-4'>
            <h3 className='text-lg font-bold mb-4'>Todos</h3>
            <div className='grid grid-cols-1 gap-y-2'>
                {todos.map(todo => (
                    <div className='flex justify-between gap-x-2 p-2 rounded border border-gray-700 w-full h-full' key={todo.id}>
                        <span>{todo.text}</span>
                        <button className='bg-red-500 text-white px-2 py-1 rounded' onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Todo