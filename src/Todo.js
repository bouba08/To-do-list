import { useState } from "react";
import '../src/style.css'


let Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        { id: todos.length + 1, text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <h1 className="todo-title">Todo List</h1>
      <input className="todo-input" type="text" value={inputValue} onChange={handleInputChange} />
      <button className="todo-add" onClick={addTodo}>Add</button>
      <ul className="todo-list">
      {todos.map(todo => (
          <li key={todo.id}>
            <span className="todo-span">{todo.text}</span>
            <button className="todo-remove" onClick={() => removeTodo(todo.id)}>Remove</button>
            <button className="todo-undo" onClick={() => toggleTodo(todo.id)}>{todo.completed ? 'Undo' : 'Complete'}</button>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Todo;
