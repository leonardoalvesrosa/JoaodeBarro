import React, { Component } from 'react';

import Materiais from './styles';
import Container from '../styles';

export default class Construcao extends Component {

  render() {
    return (

      <Container>
        <Materiais>

          <div className="materiais">
            <div className="post">
              <img src='/images/tijolos.jpg' alt="tijolos" />
            </div>

            <div className="infoMateriais">
              <h2>Tijolo Baiano</h2>
              <p>
                Estamos precisando de 100 unidades de tijolo baiano para finalizar
                uma reforma. Por favor, quem tiver o interesse de ajudar clique no
                botão abaixo.
            </p>
              <button>Fazer doação</button>
            </div>
          </div>

        </Materiais>
      </Container>
    );

  }
}

