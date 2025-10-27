import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/slice/todoSlice";
import todoList from

const TodoList = () => {
  const [currentTodo, setCurrentTodo] = useState("");


  const dispatch = useDispatch()

  const {todoList} = useSelector(state => state)
  // console.log(todoList)



  const handleTodo=()=>{
    dispatch(addTodo(currentTodo))
    setCurrentTodo('')
  }


  return (
    <div>
      <input
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
        type="text"
        name="todo"
        placeholder="Enter your todo"
      />
      <button disabled={currentTodo == ''} onClick={handleTodo}>Add Todo</button>


      <ul>
        {
          todoList && todoList.length > 0 ?
          todoList.map(todoItem => <li key={todoItem.id}>{todoItem.title}</li>  ): null
        }
      </ul>
    </div>
  );
};

export default TodoList;
