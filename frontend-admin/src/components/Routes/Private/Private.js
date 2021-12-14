import React, { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import StoreContext from '../../../components/Store/Context';

import { useHistory } from 'react-router-dom';
import api from '../../../services/api';

const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);
  const history = useHistory();

  const tokenData = Object.freeze({
    token
  });

  useEffect(async () => {
    try {
      await api.post(`/session/verify`, tokenData);
    } catch (e) {
      console.log('Token not provide');
      return history.push('/login');
    }
  }, [])


  return (
    <Route
      {...rest}
      render={() =>
        <Component {...rest} />
      }
    />
  )
}

export default RoutesPrivate;
