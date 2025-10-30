import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addingTodo, editingTodo } from '../../another-todo/another-todo-slice'

const TodoApp = () => {

    const [todoText, setTodoText]= useState('')
    const [editingtext, setEditingText] = useState(null)

    const dispatch = useDispatch()

    const {anotherTodo,newInput,setInputText} = useSelector(state => state.secondTodos)

    const handleAddTodo = ()=>{
        dispatch(addingTodo(todoText))
        setTodoText('')
    }

    const handleEdit = ()=>{
       dispatch(editingTodo({
        todoText,
        editingtext,
       }))
        setTodoText('')
    }
     

  return (
    <div>
      <input type="text" placeholder='Add your Todos here' value={todoText} onChange={(e)=>setTodoText(e.target.value)}  />
      <button onClick={handleAddTodo}>Add</button>
      

      <ul>
        {
                    anotherTodo.map(todo => <li key={todo.id}>{todo.title} <button onClick={()=>handleEdit(todo.id)}>Edit</button></li>)
        }
      </ul>
    </div>
  )
}

export default TodoApp
