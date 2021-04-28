import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/appHeader';
import SearchPanel from './components/searchPanel';
import TodoList from './components/todoList';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false},
    { label: 'Build Awesome App', important: true},
    { label: 'Have a lunch', important: false},
  ];

  return (
    <div>
      <span>{(new Date()).toString()}</span>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
  </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root'));