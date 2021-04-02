export const addTodo = (id, text) => {
  return {
    type: "ADD_TODO",
    id,
    text,
  };
};

export const editTodo = (id, text) => {
  return {
    type: "EDIT_TODO",
    id,
    text,
  };
};

export const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    id,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter,
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id,
  };
};
