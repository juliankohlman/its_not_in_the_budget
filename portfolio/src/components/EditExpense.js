import React from 'react';

const EditExpense = (props) => {
  return (
    <div>
      <p>My EditExpense component</p>
      <p>Editing the expense with id #{props.match.params.id}</p>
    </div>
  );
};

export default EditExpense;