import React from 'react';
import InputMask from 'react-input-mask';

// função que pegará todos os pontos e substituir por vazio
// deixando somente os numeros que forem de 0  a 9
const onlyNumbers = (str) => str.replace(/[^0-9]/g, '')

const MaskedInput = ({ value, onChange }) => {

  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        value: onlyNumbers(event.target.value),
      }
    })
  }



  return (
    <InputMask
      mask="(99) 99999-9999"
      value={value}
      // onChange={handleChange}
      placeholder="Informe seu celular"
    />
  );
}

export default MaskedInput;