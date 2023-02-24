import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import OrphanageRoutes from './routes/OrphanageRoutes';
import LoginRoutes from './routes/LoginRoutes';
import DashboardRoutes from './routes/DashboardRoutes';

function Routes() {
  return (
    <BrowserRouter>
      <OrphanageRoutes />

      <LoginRoutes />

      <DashboardRoutes />
    </BrowserRouter>
  );
}

export default Routes;
