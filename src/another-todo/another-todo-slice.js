import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    anotherTodo : [],
   currentInputText: '', // Holds text for the input field
        isEditing: false,     // Flag to toggle component behavior
        editingId: null,      // Holds the ID of the todo being edited
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
            // console.log(state.anotherTodo)
            return state
        },

        
        editingTodo(state, action){
                 
                const singleEdit = state.anotherTodo.find(toEdit => toEdit.id === action.payload)
                
                const newTodoList= state.anotherTodo.filter(toEdit=> toEdit.id !== action.payload)
                state.anotherTodo
                console.log(singleEdit.title)
            
        
            return {...state,
                anotherTodo:newTodoList,
                currentInputText:singleEdit,
                isEditing: true,
                editingId: action.payload
            }
        },
        deleteTodo(state, action){
            state.anotherTodo = state.anotherTodo.filter(todo=> todo.id !== action.payload)
            console.log(state.anotherTodo)
            return state;
        }
    }
})

export const {addingTodo, editingTodo,setInputText, deleteTodo} = newTodo.actions
export default newTodo.reducer