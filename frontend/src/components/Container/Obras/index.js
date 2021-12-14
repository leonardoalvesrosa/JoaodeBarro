import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Obra } from './styles';

function Obras() {
  // console.log('data ' + typeof(data));

  return (
    <>
      <Obra>
        <div className="obras">
          

          <div className="infoObras">
            <h2>Famílias atendidas!</h2>
            <p>
              Confira aqui as famílias que já ajudamos com reformas ou construção...
              
            </p>
            <Link to="/obras"><button>Saiba mais </button></Link>
          </div>

          <div className="post">
            <img src="http://localhost:3333/files/imagensGerais/familia1.jpg" alt="familia" />
          </div>
        </div>
      </Obra>
    </>
  );
}

export default Obras;
