import React from 'react';

function TodoList({ todos, deleteTodo, toggleTodo, categories, removeCategory }) {
  return (
    <div>
      {categories.map((category, index) => (
        <div key={index}>
          <h2>{category}</h2>
          <button onClick={() => removeCategory(category)}>Remove Category</button>
          <ul>
            {todos.filter(todo => todo.category === category).map(todo => (
              <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
                <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
