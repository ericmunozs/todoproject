import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import RemoveTodo from "../containers/RemoveTodo";
import EditTodo from "../containers/EditTodo";

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>
        <label>
          <input
            defaultChecked={todo.completed}
            type="checkbox"
            onChange={() => onTodoClick(todo.id)}
          />
        </label>
        <Todo key={todo.id} {...todo} />
        <EditTodo id={todo.id} text={todo.text}/>
        <RemoveTodo id={todo.id} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
