import React from "react";
import Header from "./Header";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

// Styles
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography align="center" variant="h3">
        <b>Todo App</b>
      </Typography>
      <Header />
      <VisibleTodoList />
      <AddTodo />
    </Container>
  );
};

export default App;
