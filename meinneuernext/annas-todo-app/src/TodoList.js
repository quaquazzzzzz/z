import React from 'react';

const TodoList = ({ todoList }) => {
  return (
    <div>
      <h2>ToDo-Liste</h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.task}</s> : todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

