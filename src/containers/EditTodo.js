import React, { useState } from "react";
import { connect } from "react-redux";
import { editTodo } from "../actions";

let EditTodo = ({ id, text, dispatch }) => {
  let input;

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {!isEditing && <span onClick={() => setIsEditing(true)}>Edit</span>}
      {isEditing && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            dispatch(editTodo(id, input.value));
            input.value = "";
            setIsEditing(false);
          }}
        >
          <label>Nuevo nombre</label>
          <input
            ref={(node) => {
              input = node;
            }}
            defaultValue={text || ""}
          />
          <button type="submit">Editar</button>
        </form>
      )}
    </div>
  );
};
EditTodo = connect()(EditTodo);

export default EditTodo;
