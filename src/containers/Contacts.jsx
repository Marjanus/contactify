import React, { Component } from 'react';

import Contact from '../components/Contact';
import ActiveContact from '../components/ActiveContact';
import contacts from '../utils/contacts.json';

export default class Contacts extends Component {
  constructor(props) {
    super(props);

    this.renderContacts = this.renderContacts.bind(this)
  }

  renderContacts() {
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
        <aside>
            <ActiveContact />
        </aside>
        <main>
          <table>
            <thead>
              <tr>
                <th>Name</th><th>Surname</th><th>City</th><th>Email</th><th>Phone</th><th></th>
              </tr>
            </thead>
            <tbody>
              {this.renderContacts()}
            </tbody>
          </table>
        </main>
      </section>
    );
  }
}
