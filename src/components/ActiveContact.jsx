import React from 'react';
import PropTypes from 'prop-types';

const ActiveContact = (props) => {
  return (
    <div className="active-contact">
      <div className="image-container">
        <img src="src/utils/userpic.jpg" alt="User" />
      </div>
      <div className="data-container">
        <p><span>Name:</span><span>{props.name}</span></p>
        <p><span>Surname:</span><span>{props.surname}</span></p>
        <p><span>City:</span><span>{props.city}</span></p>
        <p><span>Email:</span><span><a href="mailto:#">{props.email}</a></span></p>
        <p><span>Phone:</span><span>{props.phone}</span></p>
      </div>
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
