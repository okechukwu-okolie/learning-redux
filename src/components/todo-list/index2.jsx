import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addingTodo, editingTodo, deleteTodo } from '../../another-todo/another-todo-slice'

const TodoApp = () => {

    const [todoText, setTodoText]= useState('')
    // const [editingtext, setEditingText] = useState(null)

    const dispatch = useDispatch()

    const {anotherTodo,currentInputText,isEditing} = useSelector(state => state.secondTodos)

    const handleAddTodo = ()=>{
        dispatch(addingTodo(todoText))
        setTodoText('')
    }

    const handleEdit = (getId)=>{
       dispatch(editingTodo(getId))
       setTodoText()
    }

    const handleDelete = (getId)=>{
        dispatch(deleteTodo(getId))
    }
     
//editingItem === 'null' ? todoText : setTodoText(todoText)
  return (
    <div>
      <input type="text" placeholder='Add your Todos here' value={isEditing === true ?currentInputText :  todoText} onChange={(e)=>setTodoText(e.target.value)}  />
      <button onClick={handleAddTodo}>Add</button>
      

      <ul>
        {
                    anotherTodo.map(todo => <li key={todo.id}>{todo.title} 
                    <button onClick={()=>handleEdit(todo.id)}>Edit</button>
                    <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                    </li>)
        }
      </ul>
    </div>
  )
}

export default TodoApp
