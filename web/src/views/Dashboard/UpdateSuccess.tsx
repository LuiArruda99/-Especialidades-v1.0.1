import React from 'react';

import SuccessArea from '../../components/SuccessView';
import SuccessImage from '../../images/Logo-big.svg';



export default function UpdateSuccess() {
  return (
    <SuccessArea
      feedback={`O cadastro foi aprovado e agora aparecerá no mapa :)`}
      link="/dashboard/registred"
      linkInfo="Voltar aos cadastros"
      color="#37C77F"
      image={SuccessImage}
      btnClass='goto-app'
      title='Ebaaa!'
    />
  );
}
