import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../actions";

// Styles
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

let RemoveTodo = ({ id, dispatch }) => {

  return (
    <IconButton
      aria-label="delete"
      color="primary"
      onClick={() => dispatch(removeTodo(id))}
    >
      <DeleteIcon />
    </IconButton>
  );
};
RemoveTodo = connect()(RemoveTodo);

export default RemoveTodo;
