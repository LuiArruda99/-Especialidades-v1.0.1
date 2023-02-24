import React from 'react';
import { FiArrowRight, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// !CSS
import '../styles/pages/landing.css';

// !IMAGES
import logoImg from '../images/Logo.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo Happy" />

        <main>
          <h1>Sua policlínica completa a um clique de distância</h1>
          <p>Descubra os melhores profissionais em sua região</p>
        </main>

        <div className="location">
          <strong></strong>
        </div>

        <Link to="/dashboard/registred" className="enter-restrict-access">
          <FiLock size={26} />
          Acesso restrito
        </Link>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
