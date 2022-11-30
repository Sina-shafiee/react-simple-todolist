import { useReducer } from 'react';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './app-actions';
import reducer from './app-reducer';

import AppContext from './app-context';

function AppState({ children }) {
  const initialState = {
    todo: JSON.parse(localStorage.getItem('todo')) ?? []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // add todo
  const addTodo = (todo) => {
    dispatch({ type: ADD_TODO, payload: todo });
    localStorage.setItem('todo', JSON.stringify(state.todo));
  };
  // remove todo
  const removeTodo = (todoId) => {
    dispatch({ type: REMOVE_TODO, payload: todoId });
    localStorage.setItem('todo', JSON.stringify(state.todo));
  };

  // toggle todo
  const toggleTodo = (todoId) => {
    dispatch({ type: TOGGLE_TODO, payload: todoId });
    localStorage.setItem('todo', JSON.stringify(state.todo));
  };

  return (
    <AppContext.Provider
      value={{ todo: state.todo, toggleTodo, removeTodo, addTodo }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppState;
