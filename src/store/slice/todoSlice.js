
//name initialstate reducers

// import { createSlice } from "@reduxjs/toolkit";

//  const initialState ={
//     todoList:[],
//  }

// const todoReducer = createSlice({
//     name:'todos',
//     initialState: initialState,
//     reducers:{
//        //combine all the actions that you need. 
//        addTodo(state,action){
//             console.log(action)
//         return state
//        }
//     }
// })

// export const {addTodo} = todoReducer.actions
// export default todoReducer.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList:[],
}


const todoReducer = createSlice({
    name:'todos',
    initialState:initialState,
    reducers:{
        addTodo(state,action){
               const newlyCreatedTodo = {
                id: Math.random(),
                title: action.payload,
               }

               state.todoList.push(newlyCreatedTodo)
            return state
        }
    }
})

export const {addTodo} = todoReducer.actions
export default todoReducer.reducer