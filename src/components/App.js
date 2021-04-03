import React from 'react'
import Header from './Header'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Typography } from '@material-ui/core'

const App = () => (
  <div>
    <Typography variant="h3"><b>Todo App</b></Typography>
    <Header />
    <VisibleTodoList />
    <AddTodo />
  </div>
)

export default App