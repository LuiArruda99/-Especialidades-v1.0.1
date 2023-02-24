import React from 'react';

import SuccessArea from '../components/SuccessView';
import SuccessImage from '../images/Logo-big.svg';

export default function Success() {
  return (
    <SuccessArea
      feedback={`O cadastro deu certo e foi enviado
    ao administrador para ser aprovado.
    Agora é só esperar :)`}
      link="/app"
      linkInfo="Voltar ao mapa"
      color="rgb(66 195 130 / 81%)"
      image={SuccessImage}
      btnClass="goto-app"
      title="Ebaaa!"
    />
  );
}
