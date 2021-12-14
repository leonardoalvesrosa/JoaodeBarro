import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StorageProvider from './components/Store/Provider';
import RoutesPrivate from './components/Routes/Private/Private';

import Main from './pages/Main';
import Login from './pages/Login';
import Usuario from './pages/Usuario';
import Historia from './pages/Historia';
import Depoimentos from './pages/Depoimentos';

import Obras from './pages/Obras/index';
import ObrasAndamento from './pages/Obras/Andamento/index';
import ObrasConcluidas from './pages/Obras/Concluidas/index';

import Postagens from './pages/Poster';
import InsereAnuncio from './pages/Anuncio';
import Status from './pages/Status';

import CadastraFamilia from './pages/FamiliaTriagem';


export default function Routes() {
  return (
    <BrowserRouter>
      <StorageProvider>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/membro" exact component={Usuario} />
          <Route path="/historia" component={Historia} />
          <Route path="/depoimentos" component={Depoimentos} />

          <Route path="/obras/andamento" exact component={ObrasAndamento} />
          <Route path="/obras/concluidas" exact component={ObrasConcluidas} />
          <Route path="/obras" component={Obras} />

          <RoutesPrivate path="/postagens" exact component={Postagens} />
          <Route path="/anuncio/novo" component={InsereAnuncio} />
          <Route path="/anuncio/status" component={Status} />

          <Route path="/familia/novo" component={CadastraFamilia} />
        </Switch>
      </StorageProvider>
    </BrowserRouter>
  );
}
