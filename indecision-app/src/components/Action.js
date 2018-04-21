import React from 'react';

const Action = props => (
  // THIS FUNCTION IS THE EQUIVALENT TO render();
  <div>
    <button
      onClick={props.handlePick} // calling the handlePick prop
      disabled={!props.hasOptions} // accessing hasOptions prop
    >
      What should I do?
    </button>
  </div>
);

export default Action;
