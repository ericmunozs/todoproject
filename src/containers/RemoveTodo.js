import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../actions";

let RemoveTodo = ({ id, dispatch }) => {
  return (
    <div>
      <span onClick={() => dispatch(removeTodo(id))}>X</span>
    </div>
  );
};
RemoveTodo = connect()(RemoveTodo);

export default RemoveTodo;
