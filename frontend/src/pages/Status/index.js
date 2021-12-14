import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Menu';
import Contato from '../../components/Footer';
import { StatusContainer, BarraStatus } from './styles';

export default class Status extends Component {

  render() {
    return (
      <>
        <Navbar />

        <StatusContainer>
          <div className="conteudo">
            <h2>Olá Leonardo, sua solicitação já está a caminho!</h2>
            <span>Anúncio Tijolo Baiano</span>
            <p>Data de envio - 20/04/2021 15:40</p>
            <p>
              Sua doação de <strong>15 unidades</strong> de Tijolo Baiano já
              está sendo processada pela equipe João de Barro.
            </p>
            <p>Sua solicitação está em fase de <strong>aprovação!</strong></p>

          </div>

          <BarraStatus>
            <ul>
              <li>
                <img src="/images/icons/mail-send.svg" alt="enviado" /><br />
                <i class="fa fa-check"></i>
                <p>Enviado</p>
              </li>

              <li>
                <img src="/images/icons/analise.svg" alt="analise" /><br />
                <i class="fa fa-check"></i>
                <p>Em análise</p>
              </li>

              <li>
                <img src="/images/icons/checked.svg" alt="aprovado" /><br />
                <i class="fa fa-check"></i>
                <p>Aprovado</p>
              </li>
            </ul>
          </BarraStatus>

        </StatusContainer>


        <Contato />
      </>
    );

  }
}

