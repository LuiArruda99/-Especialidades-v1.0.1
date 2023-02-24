import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../views/Landing';
import OrphanagesMap from '../views/OrphanagesMap';
import CreateOrphanage from '../views/CreateOrphanage';
import Orphanage from '../views/Orphanage';
import Success from '../views/Success';

export default function OrphanageRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing}></Route>
      <Route path="/app" component={OrphanagesMap}></Route>
      <Route path="/orphanages/create" component={CreateOrphanage}></Route>
      <Route path="/success" component={Success}></Route>
      <Route path="/orphanages/:id" component={Orphanage}></Route>
    </Switch>
  );
}
