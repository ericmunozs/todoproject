import React, { useEffect } from "react";
import rootReducer from "../reducers";
import {
  addTodo,
  removeTodo,
  editTodo,
  toggleTodo,
  setVisibilityFilter,
} from "../actions";

export const TodoContext = React.createContext();

const initialState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : { todos: [], visibilityFilter: "SHOW_ALL" };

export const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(rootReducer, initialState);

  useEffect(() => {
    localStorage.setItem("reduxState", JSON.stringify(state));
  }, [state]);

  const value = {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
    addTodo: (id, text) => {
      dispatch(addTodo(id, text));
    },
    removeTodo: (id) => {
      dispatch(removeTodo(id));
    },
    editTodo: (id, text) => {
      dispatch(editTodo(id, text));
    },
    toggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
    setVisibilityFilter: (filter) => {
      dispatch(setVisibilityFilter(filter));
    },
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
