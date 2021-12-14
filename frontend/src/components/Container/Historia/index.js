import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { History } from './styles';

function Historia() {
  // console.log('data ' + typeof(data));

  return (
    <>
      <History>
        <div className="historia">
          <div className="post">
            <img src="http://localhost:3333/files/imagensGerais/joaodebarro.jpg" alt="equipe" />
          </div>

          <div className="infoHistoria">
            <h2>Nossa História!</h2>
            <p>
              Aqui vai parte da história...

            </p>
            <Link to="/historia"><button>Saiba mais</button></Link>
          </div>
        </div>
      </History>
    </>
  );
}

export default Historia;
