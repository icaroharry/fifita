import React from 'react';

import './SortButton.css';

function SortButton(props) {
  return (
    <button onClick={props.onClick} className="SortButton">
      Sort
    </button>
  );
}

export default SortButton;
