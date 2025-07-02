import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

function Todo() {
    const todos = useSelector((state) => (state.todos.todos))
    const dispatch = useDispatch();
    return (
        <>
  <div className="text-2xl font-bold mb-4"></div>

  <div
    className="flex flex-col gap-2 max-h-96 overflow-y-auto pr-2"
    style={{
      scrollbarWidth: "thin",
    }}
  >
    {todos.map((todo) => (
      <li
        key={todo.id}
        style={{backgroundColor: "#F1C1CC"}}
        className="flex justify-between items-center p-3 rounded shadow border"
      >
        <span className="text-gray-800 break-words">{todo.text}</span>
        <button
          className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          X
        </button>
      </li>
    ))}
  </div>
</>

    )
}

export default Todo
