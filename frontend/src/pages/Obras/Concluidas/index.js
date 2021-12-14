import React, { Component } from 'react';

import Navbar from '../../../components/Menu';
import Contato from '../../../components/Footer';
import { Obras } from './styles';

export default class ObrasConcluidas extends Component {

  render() {
    return (
      <>
        <Navbar />

        <Obras>
          <div className="container">
            <div className="conteudo">
              <h1>Residência Família Amaral</h1>

              <h3>Descrição</h3>
              <p>
                Essa obra tem como objetivo proporcionar a família
                Amaral um lar com boas condições para se morar. Já que antes viviam
                em uma laje com infiltrações.
              </p>

              <h3>Perído</h3>
              <p>
                A obra teve início em <strong>10/03/2020 </strong>
                 e foi finalizada em <strong>25/08/2020</strong>.
              </p>

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
                <img src='/images/obras/concluidas/casa01.jpg' alt="casa01" />
                <img src='/images/obras/concluidas/casa02.jpg' alt="casa02" />
              </div>
            </div>
          </div>
        </Obras>

        <Contato />
      </>
    );

  }
}

