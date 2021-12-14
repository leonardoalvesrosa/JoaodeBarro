import React, { Component } from 'react';
import { FaKiwiBird } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import Material from './styles';

function Materials({ data }) {
  // console.log('data ' + typeof(data));

  return (
    <>
      <Material>
        <div className="materials">
          <div className="post">
            <img src={data.url} alt="feijoada" />
          </div>

          <div className="infoMaterials">
            <h2>{data.title}</h2>
            <p>
              {/* Participe da nossa feijoada beneficente para arrecadação de recursos.
                Vamos contribuir para que nossas famílias possam realizar o sonho
                de ter a casa própria! */}
              {data.description}
            </p>
            <button>Saiba mais</button>
          </div>
        </div>
      </Material>
    </>
  );
}

export default Campanhas;
