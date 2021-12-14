import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RoutesPrivate from './components/Routes/Private/Private';

import StorageProvider from './components/Store/Provider';
import CampaignProvider from './context/Campaigns/Provider';

import Login from './pages/Login';
import Usuario from './pages/Usuario';
import Main from './pages/Main';
import Status from './pages/Status';
import Campanhas from './pages/Campanhas';
import Materials from './pages/Materials';
import Postagens from './pages/Poster';
import EditPoster from './pages/EditPoster';

export default function Routes() {
  return (
    <BrowserRouter>
      <StorageProvider>
        <Switch>
          <RoutesPrivate path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/membro" exact component={Usuario} />

          <RoutesPrivate path="/campanhas" exact component={Campanhas} />

          <RoutesPrivate path="/materials" exact component={Materials} />

          <RoutesPrivate path="/postagens" exact component={Postagens} />
          {/* <RoutesPrivate path="/editarPostagem/:id" exact component={EditPoster} /> */}
          <RoutesPrivate path="/postagens/editar/:id" exact component={EditPoster} />
          {/* <Route path="/editarPostagem" exact render={(props) => <EditPoster {...props} />} /> */}

          <RoutesPrivate path="/anuncio/status" component={Status} />
        </Switch>
      </StorageProvider>
    </BrowserRouter>
  );
}
