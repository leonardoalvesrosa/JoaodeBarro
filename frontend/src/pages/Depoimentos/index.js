import React, { Component } from 'react';

import Navbar from '../../components/Menu';
import Contato from '../../components/Footer';

import { Separacao, Container } from './styles';

export default class Depoimentos extends Component {

  render() {

    return (
      <>
        <Navbar />

        <Container>
          <div className="imagem">
            <img src="/images/cimento.jpg" alt="pessoa" />
            <h2>Familia Borges</h2>
          </div>

          <div className="conteudo">
            <h2>Como o Instituto João de Barro mudou minha vida...</h2>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
              e de impressos, e vem sendo utilizado desde o século XVI, quando um
              impressor desconhecido pegou uma bandeja de tipos e os embaralhou para
              fazer um livro de modelos de tipos
            </p>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
              e de impressos, e vem sendo utilizado desde o século XVI, quando um
              impressor desconhecido pegou uma bandeja de tipos e os embaralhou para
              fazer um livro de modelos de tipos
            </p>
          </div>
        </Container>

        <Separacao />

        <Container>
          <div className="imagem">
            <img src="/images/ponte.jpg" alt="pessoa" />
            <h2>Familia Borges</h2>
          </div>

          <div className="conteudo">
            <h2>Como o Instituto João de Barro mudou minha vida...</h2>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
              e de impressos, e vem sendo utilizado desde o século XVI, quando um
              impressor desconhecido pegou uma bandeja de tipos e os embaralhou para
              fazer um livro de modelos de tipos
            </p>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
              e de impressos, e vem sendo utilizado desde o século XVI, quando um
              impressor desconhecido pegou uma bandeja de tipos e os embaralhou para
              fazer um livro de modelos de tipos
            </p>
          </div>
        </Container>

        <Separacao />

        <Container>
          <div className="imagem">
            <img src="/images/casa.jpg" alt="pessoa" />
            <h2>Familia Borges</h2>
          </div>

          <div className="conteudo">
            <h2>Como o Instituto João de Barro mudou minha vida...</h2>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
              e de impressos, e vem sendo utilizado desde o século XVI, quando um
              impressor desconhecido pegou uma bandeja de tipos e os embaralhou para
              fazer um livro de modelos de tipos
            </p>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
              e de impressos, e vem sendo utilizado desde o século XVI, quando um
              impressor desconhecido pegou uma bandeja de tipos e os embaralhou para
              fazer um livro de modelos de tipos
            </p>
          </div>
        </Container>

        <Contato />
      </>
    );

  }
}
