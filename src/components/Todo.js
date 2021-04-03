import React from "react";
import PropTypes from "prop-types";
import { TodoContext } from "../app/Provider";

// Styles
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Todo = ({ completed, text, id }) => {
  const { toggleTodo } = React.useContext(TodoContext);

  return (
    <FormControlLabel
      control={
        <GreenCheckbox onChange={() => toggleTodo(id)} checked={completed} />
      }
      label={
        <Typography
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {text}
        </Typography>
      }
    />
  );
};

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Todo;
