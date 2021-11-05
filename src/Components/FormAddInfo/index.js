import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addAditionalInfo } from '../../redux/actions';
import PropTypes from 'prop-types';

import { ContinerInfo } from './styles';

const registerSuccess = () => {
  alert('Registro feito com sucesso!');
};

const FormAddInfo = ({ takeAdditional }) => {
  const [birth, setBirth] = useState('');
  const [cpf, setCpf] = useState('');
  const [income, setIncome] = useState('');

  return (
    <ContinerInfo>
      <label htmlFor="input-name">
        Data Nascimento:
        <input
          id="input-name"
          type="text"
          name="name"
          value={birth}
          onChange={e => setBirth(e.target.value)}
        />
      </label>
      <label htmlFor="input-lastName">
        CPF:
        <input
          id="input-lastName"
          type="text"
          name="lastname"
          value={cpf}
          onChange={e => setCpf(e.target.value)}
        />
      </label>
      <label htmlFor="input-email">
        Renda Mensal:
        <input
          id="input-email"
          type="text"
          name="email"
          value={income}
          onChange={e => setIncome(e.target.value)}
        />
      </label>
      <Link to="/">
        <button
          onClick={() => {
            registerSuccess(), takeAdditional(birth, cpf, income);
          }}
        >
          Próximo
        </button>
      </Link>
    </ContinerInfo>
  );
};

const mapDispatchToProps = dispatch => ({
  takeAdditional: (birth, cpf, income) => dispatch(addAditionalInfo(birth, cpf, income)),
});

FormAddInfo.propTypes = {
  takeAdditional: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(FormAddInfo);
