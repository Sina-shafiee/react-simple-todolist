import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './app-actions';

const reducer = (state, action) => {
  if (action.type === ADD_TODO) {
    const newData = [...state.todo, action.payload];
    localStorage.setItem('todo', JSON.stringify(newData));
    return {
      ...state,
      todo: newData
    };
  } else if (action.type === REMOVE_TODO) {
    const newData = state.todo.filter((todo) => todo.id !== action.payload);
    localStorage.setItem('todo', JSON.stringify(newData));
    return {
      ...state,
      todo: newData
    };
  } else if (action.type === TOGGLE_TODO) {
    const newData = state.todo.map((t) =>
      t.id === action.payload ? { ...t, isCompleted: !t.isCompleted } : t
    );
    localStorage.setItem('todo', JSON.stringify(newData));

    return {
      ...state,
      todo: newData
    };
  } else {
    return state;
  }
};

export default reducer;
