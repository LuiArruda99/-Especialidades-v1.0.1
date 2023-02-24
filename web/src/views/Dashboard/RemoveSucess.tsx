import React from 'react';

import SuccessArea from '../../components/SuccessView';
import RemoveImage from '../../images/Logo-big.svg';

export default function UpdateSuccess() {
  return (
    <SuccessArea
      feedback={`O profissional cadastrado foi removido :(`}
      link="/dashboard/registred"
      linkInfo="Voltar aos cadastros"
      color="rgb(231 113 157)"
      image={RemoveImage}
      btnClass='goto-app-red'
      title='Excluir!'
    />
  );
}
