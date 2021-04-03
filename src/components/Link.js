import React from "react";
import PropTypes from "prop-types";
import { TodoContext } from "../app/Provider";

const isActive = (filter, visibilityFilter) => filter === visibilityFilter;

const Link = ({ children, filter }) => {
  const { visibilityFilter, setVisibilityFilter } = React.useContext(
    TodoContext
  );

  if (isActive(filter, visibilityFilter)) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="/#"
      onClick={(e) => {
        e.preventDefault();
        setVisibilityFilter(filter);
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Link;
