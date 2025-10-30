import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    anotherTodo : [],
    newInput:'',
    editingItem: null
}


const newTodo = createSlice({
    name:'new-todo',
    initialState: initialState,
    reducers:{
        addingTodo(state, action){
            const newTodo = {
                id: Math.random(),
                title: action.payload,
                completed:false
            }
            if(action.payload.trim() === '')return

            state.anotherTodo.push(newTodo)

            return state
        },

        
        editingTodo(state, action){

            let listing = state.anotherTodo
            let New = listing.find(todo=> todo.id === action.payload)
            console.log(New)
            
        
            return state
        }
    }
})

export const {addingTodo, editingTodo,setInputText} = newTodo.actions
export default newTodo.reducer