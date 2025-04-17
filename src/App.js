import './App.css';
import AddTodo from './pages/todo/views/AddTodo';
import FilterButtons from './pages/todo/views/FilterButtons';
import TodoList from './pages/todo/views/TodoList';

const App = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Todo List App</h2>
      <AddTodo />
      <FilterButtons />
      <TodoList />
    </div>
  );
};

export default App;
