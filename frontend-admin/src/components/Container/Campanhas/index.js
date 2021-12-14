import React, { Component } from 'react';

import Campanha from './styles';
import Container from '../styles';

export default class Campanhas extends Component {

  render() {
    return (

      <Container>
        <Campanha>

          <div className="campanha">
            <div className="post">
              <img src='/images/feijoada.jpg' alt="feijoada" />
            </div>

            <div className="infoCampanha">
              <h2>Feijoada IJB</h2>
              <p>
                Participe da nossa feijoada beneficente para arrecadação de recursos.
                Vamos contribuir para que nossas famílias possam realizar o sonho
                de ter a casa própria!
              </p>
              <button>Saiba mais</button>
            </div>
          </div>

        </Campanha>
      </Container>
    );

  }
}

