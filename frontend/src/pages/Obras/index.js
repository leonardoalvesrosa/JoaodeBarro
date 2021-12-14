import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Menu';
import Contato from '../../components/Footer';
import { Construcoes } from './styles';

export default class Obras extends Component {

  render() {
    return (
      <>
        <Navbar />

        <Construcoes>

          <div className="container">

            <div className="obrasAndamento">
              <div className="image">
                <img src='/images/andamento01.jpg' alt="andamento" />
              </div>
              <div className="conteudo">
                <h1>Obras em andamento</h1>
                <p>
                  Confira aqui as obras que estão
                  em fase de reforma / construção.
                </p>
                <Link
                  to="/obras/andamento"
                  className="btn"
                >
                  Confira
                </Link>
              </div>
            </div>

            <div className="obrasConcluidas">
              <div className="image">
                <img src='/images/concluido01.jpg' alt="concluidas" />
              </div>
              <div className="conteudo">
                <h1>Obras concluídas</h1>
                <p>
                  Confira aqui todas as obras que foram realizas
                  pelo Instituto João de Barro.
                </p>
                <Link
                  to="/obras/concluidas"
                  className="btn"
                >
                  Confira
                </Link>
              </div>
            </div>
          </div>

        </Construcoes>

        <Contato />
      </>
    );

  }
}

