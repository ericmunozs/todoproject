import React, { useState } from "react";
import { connect } from "react-redux";
import { editTodo } from "../actions";

// Styles
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    alignItems: "center",
  },
}));

let EditTodo = ({ id, text, dispatch }) => {
  const classes = useStyles();

  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {!isEditing && (
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => setIsEditing(true)}
        >
          <EditIcon />
        </IconButton>
      )}
      {isEditing && (
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            const materialInput = document.getElementById("editButton");
            if (!materialInput.value.trim()) {
              return;
            }
            dispatch(editTodo(id, materialInput.value));
            materialInput.value = "";
            setIsEditing(false);
          }}
        >
          <TextField
            id="editButton"
            label="Editar tarea"
            defaultValue={text || ""}
          />
          <Fab size="small" color="primary" aria-label="save" type="submit">
            <SaveIcon />
          </Fab>
        </form>
      )}
    </>
  );
};
EditTodo = connect()(EditTodo);

export default EditTodo;
