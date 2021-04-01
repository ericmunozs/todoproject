import React from "react";
import PropTypes from "prop-types";

const Todo = ({ completed, text }) => (
  <span
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </span>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
