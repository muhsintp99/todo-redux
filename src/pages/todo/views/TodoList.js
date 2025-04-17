import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../container/todoSlice";

const TodoList = () => {
  const todos = useSelector(state => state.todos?.todos || []); // ✅ Handle undefined case
  const filter = useSelector(state => state.todos?.filter || "All");
  const dispatch = useDispatch();

  const filteredTodos = todos.filter(todo => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map(todo => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
          <button onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
