import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Clients = ({ name, lastName }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{lastName}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.info.formInfo.name,
  lastName: state.info.formInfo.lastName,
});

Clients.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Clients);
