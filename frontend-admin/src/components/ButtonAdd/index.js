import React, { useState } from 'react';

import './styles.css';

function ButtonAdd() {

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <button
      className="button-add"
      title="Inserir Campanha"
      onClick={handleOpen}
    >
      +
    </button>
  );
}

export default ButtonAdd;