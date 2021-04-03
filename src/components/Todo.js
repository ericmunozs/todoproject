import React from "react";
import PropTypes from "prop-types";

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

const Todo = ({ completed, text, onTodoClick, id }) => (
  <FormControlLabel
    control={
      <GreenCheckbox onChange={() => onTodoClick(id)} checked={completed} />
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

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
