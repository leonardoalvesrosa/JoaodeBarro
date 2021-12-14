import React, { Component } from 'react';

import Navbar from '../../../components/Menu';
import Contato from '../../../components/Footer';
import { Obras } from './styles';

export default class ObrasAndamento extends Component {

  render() {
    return (
      <>
        <Navbar />

        <Obras>
          <div className="container">
            <div className="conteudo">
              <h1>Residência Família Rodrigues</h1>

              <h3>Descrição</h3>
              <p>
                Essa obra tem como objetivo proporcionar a família
                Rorigues um lar com boas condições para se morar. Já que antes viviam
                em uma laje com infiltrações.
              </p>

              <h3>Perído</h3>
              <p>A obra teve início em <strong>01/02/2020</strong>.</p>

              <h3>Equipe</h3>
              <ul>
                <li>Felipe Vasconcelos - Engenheiro</li>
                <li>Miranda Machado - Arquiteto</li>
                <li>Marcos Fagundes - Mestre de Obra</li>
                <li>José Antônio - Pedreiro</li>
                <li>Ricardo Santos - Pedreiro</li>
              </ul>

              <h3>Fotos da Obra</h3>
              <div className="images">
                <img src='/images/obras/andamento/img01.jpg' alt="img01" />
                <img src='/images/obras/andamento/img02.jpg' alt="img02" />
                <img src='/images/obras/andamento/img03.jpg' alt="img03" />
              </div>
            </div>
          </div>
        </Obras>

        <Contato />
      </>
    );

  }
}

