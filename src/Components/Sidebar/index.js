import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ButtonsContianer } from './styles';

const Sidebar = () => {
  return (
    <Container>
      <ButtonsContianer>
        <Link to="/forminfo">
          <button>+ Cadastrar</button>
        </Link>
        <button>Clientes</button>
      </ButtonsContianer>
    </Container>
  );
};

export default Sidebar;
