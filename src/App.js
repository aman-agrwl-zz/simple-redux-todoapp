import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const handleClick = id => dispatch({
    type: 'DELETE_TODO',
    payload: id
  })
  if (!todos || !todos.length) {
    return <p>No Todos</p>
  }

  return (
    <ul>
      {todos.map(todo => <li>{todo.label} <span onClick={() => handleClick(todo.id)} class="close">×</span> </li>)}
    </ul>
  )
}

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChange = event => setNewTodo(event.target.value);
  const handleClick = () => dispatch({
    type: 'ADD_TODO',
    payload: {
      label: newTodo,
      id: Math.ceil(Math.random() * 100),
    }
  })

  return (
    <div className="header">
      <input value={newTodo} onChange={handleChange} type="text" />
      <span onClick={handleClick} className="addBtn">ADD TODO</span>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <h3>
          To DO Application
        </h3>
        <TodoInput />
        <Todos />
      </div>
    </div>
  );
}

export default App;
