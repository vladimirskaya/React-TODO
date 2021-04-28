import React from 'react';

import TodoListItem from './todoListItem';

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {
    return (
      <li>
        <TodoListItem {...item}
          // label={item.label} - здесь применили спред
          // important={item.important} 
        />
      </li>         
    )
  });

  return (
      <ul>
        { elements }
      </ul>
    )
  }

  export default TodoList;