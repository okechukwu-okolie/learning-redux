import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,deleteTodo, editTodo, fetchTodos } from "../../store/slice/todoSlice";


const TodoList = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const [editedTodoItem, setEditedTodoItem] = useState(null)


  const dispatch = useDispatch()

  const {todoList, todoListFromApi, loading} = useSelector(state => state.todos)
  console.log(todoListFromApi)



  const handleTodo=()=>{
    dispatch(addTodo(currentTodo))
    setCurrentTodo('')
  }

  const handleDelete = (getId)=>{
  dispatch(deleteTodo(getId))
  }

  const handleEdit = (getCurrentTodo)=>{
    setEditedTodoItem(getCurrentTodo.id)
    setCurrentTodo(getCurrentTodo.title)
  }

  
  const handleEditUpdate = ()=>{
     dispatch(editTodo({
      currentTodo,
      editedTodoItem
    }))
    setCurrentTodo('')
  }


  const shoutOut =()=>{

  }



  const fetchListOfTodos =()=>{
    dispatch(fetchTodos())
  }

  if(loading){
  return <h1>fetching todo from api</h1>
  }

  return (
    <div>
      <input
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
        type="text"
        name="todo"
        placeholder= "Enter your todo"
      />
      <button disabled={currentTodo == ''}  onClick={editedTodoItem !== null ? handleEditUpdate : handleTodo}>{editedTodoItem !== null ? `Edit Todo` : `Add Todo`}</button>


      <ul>
        {todoList && todoList.length > 0 ? todoList.map(todoItem => <li key={todoItem.id}>
          <p>{todoItem.title}
           <button onClick={()=>handleDelete(todoItem.id)}>Delete</button>
            <button onClick={()=>handleEdit(todoItem)}>Edit</button>
          </p>
        
        </li>  ): null}
      </ul>
      <button onClick={fetchListOfTodos}>Fetch list of API</button>
      <button onClick={shoutOut}></button>

      <ul>
        {
          todoListFromApi && todoListFromApi.length > 0 ? todoListFromApi.map(todoItem => <li key={todoItem.id}>{todoItem.todo}</li>): null
        }
      </ul>
    </div>
  );
};

export default TodoList;
