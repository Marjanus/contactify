import React from 'react';
import PropTypes from 'prop-types';

const Contact = (props) => {
  const isVisible = props.active ?
    <i className="fa fa-eye" aria-hidden="true" /> :
    <i className="fa fa-eye-slash" aria-hidden="true" />;
  const editIcon = <i className="fa fa-pencil" aria-hidden="true" />;
  const deleteIcon = <i className="fa fa-trash" aria-hidden="true" />;

  return (
    <tr>
      <td>{isVisible}{props.name}</td>
      <td>{props.surname}</td>
      <td>{props.city}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{editIcon}{deleteIcon}</td>
    </tr>
  );
};

Contact.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
