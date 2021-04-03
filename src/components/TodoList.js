import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import RemoveTodo from "../containers/RemoveTodo";
import EditTodo from "../containers/EditTodo";

// Styles
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
  },
}));

const TodoList = ({ todos }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <ListItem className={classes.listItem}>
              <Todo {...todo} />
              <div className={classes.buttons}>
                <EditTodo id={todo.id} text={todo.text} />
                <RemoveTodo id={todo.id} />
              </div>
            </ListItem>
            <Divider />
          </React.Fragment>
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
};

export default TodoList;
