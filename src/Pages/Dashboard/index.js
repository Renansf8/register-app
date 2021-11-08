import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Sidebar from '../../Components/Sidebar';
import {
  Container,
  ClientsContainer,
  LeftContent,
  RightContent,
  ClientsList,
} from './styles';

const Dashboard = ({ toggle }) => {
  const registerList = JSON.parse(localStorage.getItem('register'));

  return (
    <Container>
      <LeftContent>
        <Sidebar />
      </LeftContent>
      <RightContent>
        <h1>Bem vindo(a) ao app de registro!</h1>
        {toggle ? (
          <ClientsContainer>
            <h2>Usuários cadastrados</h2>
            <ClientsList>
              {registerList.map(
                ({
                  name,
                  lastName,
                  email,
                  phone,
                  cep,
                  address1,
                  address2,
                  birth,
                  cpf,
                  income,
                }) => {
                  return (
                    <div key={name}>
                      <p>
                        <span>Nome:</span> {name}
                      </p>
                      <p>
                        <span>Sobrenome:</span> {lastName}
                      </p>
                      <p>
                        <span>E-mail:</span> {email}
                      </p>
                      <p>
                        <span>Telefone:</span> {phone}
                      </p>
                      <p>
                        <span>CEP:</span> {cep}
                      </p>
                      <p>
                        <span>Endereço 1:</span> {address1}
                      </p>
                      <p>
                        <span>Endereço 2:</span> {address2}
                      </p>
                      <p>
                        <span>Data Nascimento:</span> {birth}
                      </p>
                      <p>
                        <span>CPF:</span> {cpf}
                      </p>
                      <p>
                        <span>Renda Mensal:</span> {income}
                      </p>
                    </div>
                  );
                }
              )}
            </ClientsList>
          </ClientsContainer>
        ) : null}
      </RightContent>
    </Container>
  );
};

const mapStateToProps = state => ({
  name: state.info.formInfo.name,
  lastName: state.info.formInfo.lastName,
  email: state.info.formInfo.email,
  phone: state.info.formInfo.phone,
  cep: state.info.addressInfo.cep,
  address1: state.info.addressInfo.address1,
  address2: state.info.addressInfo.address2,
  birth: state.info.additionalInfo.birth,
  cpf: state.info.additionalInfo.cpf,
  income: state.info.additionalInfo.income,
  toggle: state.list.listSwitch,
});

Dashboard.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  address1: PropTypes.string.isRequired,
  address2: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  income: PropTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Dashboard);
