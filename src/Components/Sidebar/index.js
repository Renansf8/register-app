import React from 'react';

import { Container, ButtonsContianer } from './styles';

const Sidebar = () => {
  return (
    <Container>
      <ButtonsContianer>
        <button>+ Cadastrar</button>
        <button>Clientes</button>
      </ButtonsContianer>
    </Container>
  );
};

export default Sidebar;
