import React from "react";
import FilterLink from "../containers/FilterLink";

// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <b>Mostrar: </b>
      <FilterLink filter="SHOW_ALL">Todos</FilterLink>
      {", "}
      <FilterLink filter="SHOW_ACTIVE">Activos</FilterLink>
      {", "}
      <FilterLink filter="SHOW_COMPLETED">Completados</FilterLink>
    </div>
  );
};
export default Header;
