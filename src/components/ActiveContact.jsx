import React from 'react';
import PropTypes from 'prop-types';

const ActiveContact = (props) => {
  return (
    <div>
      <img src="src/utils/userpic.jpg" alt="User" />
      <p>Name: {props.name}</p>
      <p>Surname: {props.surname}</p>
      <p>City: {props.city}</p>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
};

ActiveContact.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ActiveContact;
