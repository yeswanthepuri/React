import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { 
           const todo =  { id: nanoid(), text: action.payload }
           state.todos.push(todo);
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})


export const {addTodo,removeTodo} = todoSlice.actions  ;
//this should be wired up in the store.
export default todoSlice.reducer;