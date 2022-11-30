import { useContext } from 'react';

import './TodoList.css';

import AppContext from '../../context/app-context';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
  const { todo } = useContext(AppContext);
  const addTodo = () => {};
  return (
    <div className='TodoList'>
      {todo.map((t) => {
        return <TodoItem key={t.id} {...t} />;
      })}
    </div>
  );
}

export default TodoList;
