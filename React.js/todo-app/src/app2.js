import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="todo-input">
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a new task" />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>   
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>    
            <button onClick={() => deleteTodo(index)}>Delete</button>            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
