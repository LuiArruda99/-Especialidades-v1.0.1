import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoutes from '../components/PrivateRoutes';

import RegistredOrphanages from '../views/Dashboard/RegistredOrphanages';
import PendingOrphanages from '../views/Dashboard/PendingOrphanages';
import UpdateSucess from '../views/Dashboard/UpdateSuccess';
import RemoveSuccess from '../views/Dashboard/RemoveSucess';

export default function LoginRoutes() {
  return (
    <Switch>
      <PrivateRoutes
        exact
        path="/dashboard/registred"
        component={RegistredOrphanages}
      ></PrivateRoutes>

      <PrivateRoutes
        exact
        path="/dashboard/pending"
        component={PendingOrphanages}
      ></PrivateRoutes>

      <PrivateRoutes
        exact
        path="/updateSuccess"
        component={UpdateSucess}
      ></PrivateRoutes>

      <PrivateRoutes
        exact
        path="/removeSuccess"
        component={RemoveSuccess}
      ></PrivateRoutes>
    </Switch>
  );
}
