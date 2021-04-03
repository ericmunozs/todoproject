import React from "react";
import { TodoContext } from "../app/Provider";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
    default:
      return [];
  }
};

const VisibleTodoList = () => {
  const { todos, visibilityFilter } = React.useContext(TodoContext);

  return <TodoList todos={getVisibleTodos(todos, visibilityFilter)} />;
};

export default VisibleTodoList;
