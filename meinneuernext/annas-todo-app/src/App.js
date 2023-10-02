import React, { useState } from 'react';
import './App.css';


function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, task: 'Einkaufen gehen', completed: false },
    { id: 2, task: 'React-App erstellen', completed: true },
    { id: 3, task: 'Übungen für JavaScript machen', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  // Weitere Funktionen

  const addTodo = (newTask) => {
    if (newTask.trim() === '') return;
    const newTodo = {
      id: todoList.length + 1,
      task: newTask,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setNewTask('');
  };

  const completeTodo = (id) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(updatedTodoList);
  };  

  const deleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="App">
      <h1>Anna's ToDo-Liste</h1>
      <div className="todo-container">
        <input
          type="text"
          placeholder="Neues ToDo hinzufügen"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={() => addTodo(newTask)}>Hinzufügen</button>
      </div>
      <ul className="todo-list">
  {todoList.map((todo) => (
    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
      <span onClick={() => completeTodo(todo.id)}>{todo.task}</span>
      <button onClick={() => deleteTodo(todo.id)}>Löschen</button>
    </li>
  ))}
</ul>

    </div>
  );
}

export default App;