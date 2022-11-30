import { useContext } from 'react';
import AppContext from './context/app-context';
import './App.css';

import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

function App() {
  const { todo } = useContext(AppContext);
  return (
    <div className='App'>
      <h2 className='title'>Todo list</h2>
      <TodoInput />
      {todo.length ? <TodoList /> : null}
    </div>
  );
}

export default App;
