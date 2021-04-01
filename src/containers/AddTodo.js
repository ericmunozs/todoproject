import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

// Styles
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > div": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    display: "flex",
    alignItems: "center",
  },
}));

let AddTodo = ({ dispatch }) => {
  const classes = useStyles();

  return (
    <form
      className={classes.form}
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        const materialInput = document.getElementById("addButton");
        if (!materialInput.value.trim()) {
          return;
        }
        dispatch(addTodo(materialInput.value));
        materialInput.value = "";
      }}
    >
      <TextField id="addButton" label="Añadir tarea" />
      <Fab size="small" color="primary" aria-label="add" type="submit">
        <AddIcon />
      </Fab>
    </form>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
