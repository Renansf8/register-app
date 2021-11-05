import React from 'react';

import Sidebar from '../../Components/Sidebar';
import { Container } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Sidebar />
      <h1>Bem vindo(a) ao app de registro!</h1>
    </Container>
  );
};

export default Dashboard;
