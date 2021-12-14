import React, { Component } from 'react';

import { Material } from './styles';
import { Link } from 'react-router-dom';

function Construcao({ data, getData }) {

  return (

    <Material>

      <div className="materiais">
        <div className="post">
          <img src={data.url} alt="material" />
        </div>

        <div className="infoMateriais">
          <h2>{data.title}</h2>
          <p>
            {data.description}
          </p>
          <button><Link to="/anuncio/novo" className="bottom">Cadastrar</Link></button>
        </div>
      </div>

    </Material>
  );

}

export default Construcao;

