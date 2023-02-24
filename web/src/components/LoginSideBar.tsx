import React from 'react';

import '../styles/components/login_sidebar.css';
import Logo from '../images/Logo-big.svg';

export default function LoginSideBar() {
  return (
    <aside className="login-side-bar">
      <img src={Logo} alt="Happy Logo" />
      <div className="locations">
        <span>Conetando profissionais de saúde e pacientes em todo solo brasileiro.</span>
      </div>
    </aside>
  );
}
