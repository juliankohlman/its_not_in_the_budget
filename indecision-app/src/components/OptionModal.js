import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    // onRequestClose => takes a function..when user trys to close the modal
    // pressing escape key or clicking background
    onRequestClose={props.clearSelected}
    contentLabel="Selected Option"
  >
    <h3>Selected Option </h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.clearSelected}>Okay</button>
  </Modal>
);

export default OptionModal;
