import React, { Component, useContext } from 'react';

import { Route, Redirect } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';

import Navbar from '../../components/Menu/index';
import Contato from '../../components/Footer/index';
import Campanhas from '../../components/Container/Campanhas/index';
import Construcao from '../../components/Container/Materiais/index';
import Title from '../../components/Titulo/index';
import { InsereAnuncio, Button } from './styles';

const Main = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);

  return (
    <>
      <Navbar />

      {/* <Title value="Campanhas" />

      <Campanhas />

      <Title value="Materiais necessários para doação..." />

      <Construcao />

      <InsereAnuncio>
        <div className="container">
          <h2>Gostaria de ajudar este projeto ?</h2>
          <p>
            Você pode publicar aqui no nosso portal <strong>qualquer material </strong>
               que esteja sobrando em sua residência.<br />
               Mas fique tranquilo, o Instituto também precisa de ajuda em <strong>
              trabalhos voluntários!</strong>
          </p>
          <p>Clique abaixo em publique seu anúncio ao Instituto João de Barro</p>
          <Button to="/anuncio/novo">
              Inserir Anúncio
            </Button>
        </div>
      </InsereAnuncio> */}

      <Contato />
    </>
  );

}

export default Main;