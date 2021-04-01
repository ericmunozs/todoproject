import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import RemoveTodo from "../containers/RemoveTodo";
import EditTodo from "../containers/EditTodo";

// Styles
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoList = ({ todos, onTodoClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <FormControlLabel
              control={
                <GreenCheckbox
                  onChange={() => onTodoClick(todo.id)}
                  defaultChecked={todo.completed}
                />
              }
            />
            <Todo key={todo.id} {...todo} />
            <EditTodo id={todo.id} text={todo.text} />
            <RemoveTodo id={todo.id} />
            <Divider />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

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
