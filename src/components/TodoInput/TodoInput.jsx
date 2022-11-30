import { useState, useContext } from 'react';
import AppContext from '../../context/app-context';

import './TodoInput.css';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      title: input,
      id: new Date().getTime().toLocaleString(),
      isCompleted: false
    };

    addTodo(todo);
    setInput('');
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
        className='todoInput'
        placeholder='write todo...'
      />
      <button type='submit'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          className='add-icon'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 4.5v15m7.5-7.5h-15'
          />
        </svg>
      </button>
    </form>
  );
};

export default TodoInput;
