import React from "react";
import PropTypes from "prop-types";
import { TodoContext } from "../app/Provider";

// Styles
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const RemoveTodo = ({ id }) => {
  const { removeTodo } = React.useContext(TodoContext);

  return (
    <IconButton
      aria-label="delete"
      color="primary"
      onClick={() => removeTodo(id)}
    >
      <DeleteIcon />
    </IconButton>
  );
};

RemoveTodo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default RemoveTodo;
