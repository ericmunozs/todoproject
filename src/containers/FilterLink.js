import React from "react";
import PropTypes from "prop-types";
import Link from "../components/Link";

const FilterLink = ({ filter, children }) => {
  return <Link filter={filter} children={children} />;
};

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterLink;
