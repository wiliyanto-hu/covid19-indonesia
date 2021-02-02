import React from "react";

const Toggler = (initialState) => {
  const [state, setState] = React.useState(initialState);

  const toggle = () => setState(!state);

  return [state, toggle];
};
export default Toggler;
