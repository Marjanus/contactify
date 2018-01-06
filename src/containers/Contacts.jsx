import React, { Component } from 'react';

import Contact from '../components/Contact';
import contacts from '../utils/contacts.json';

export default class Contacts extends Component {
  static renderContacts() {
    return (
      contacts.map((item) => {
        return (
          <Contact
            key={item.id}
            active={item.active}
            name={item.name}
            surname={item.surname}
            city={item.city}
            email={item.email}
            phone={item.phone}
          />
        );
      })
    );
  }

  render() {
    return (
      <section>
        <table>
          <thead>
            <tr><th>Name</th><th>Surname</th><th>City</th><th>Email</th><th>Phone</th></tr>
          </thead>
          <tbody>
            {Contacts.renderContacts()}
          </tbody>
        </table>
      </section>
    );
  }
}
