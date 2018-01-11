import React, { Component } from 'react';

import FiltersBar from '../containers/FiltersBar';
import Contact from '../components/Contact';
import ActiveContact from '../components/ActiveContact';

import mockContactsData from '../utils/contacts.json';

export default class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allContacts: [],
      visibleContacts: [],
      activeId: 3,
      sortedTable: false,
      sortDirection: 'asc',
    };

    this.handleSortContacts = this.handleSortContacts.bind(this);
    this.handleFilterContacts = this.handleFilterContacts.bind(this);
    this.handleSetActiveContact = this.handleSetActiveContact.bind(this);
    this.renderActiveContact = this.renderActiveContact.bind(this);
    this.renderVisibleContacts = this.renderVisibleContacts.bind(this);
  }

  componentWillMount() {
    this.setState({ allContacts: mockContactsData, visibleContacts: mockContactsData });
  }

  handleSortContacts() {
    this.setState({ sortedTable: true });
    const sortedContacts = this.state.visibleContacts.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (this.state.sortDirection === 'asc') {
        this.setState({ sortDirection: 'desc' });
        if (nameA < nameB) { return -1; }
        if (nameA > nameB) { return 1; }
        return 0;
      }
      this.setState({ sortDirection: 'asc' });
      if (nameA < nameB) { return 1; }
      if (nameA > nameB) { return -1; }
      return 0;
    });

    this.setState({ visibleContacts: sortedContacts });
  }

  handleFilterContacts(name, city, isActive) {
    const filterName = (item, queryName) => {
      if (queryName) { return item.name.toLowerCase().indexOf(queryName.toLowerCase()) > -1; }
      return true;
    };

    const filterCity = (item, cityQuery) => {
      if (cityQuery) { return item.city === cityQuery; }
      return true;
    };

    const filterActivity = (item, activity) => {
      if (isActive) { return item.active === activity; }
      return true;
    };

    const filteredContacts = this.state.allContacts.filter((item) => {
      return filterName(item, name) && filterCity(item, city) && filterActivity(item, isActive);
    });

    this.setState({
      visibleContacts: filteredContacts,
      sortedTable: false,
    });
  }

  handleSetActiveContact(e) {
    const newId = parseInt(e.target.closest('tr').dataset.id, 10);
    this.setState({ activeId: newId });
  }

  renderActiveContact() {
    const activeItem = this.state.allContacts.filter((contact) => {
      return contact.id === this.state.activeId;
    })[0];

    return (
      <ActiveContact
        name={activeItem.name}
        surname={activeItem.surname}
        city={activeItem.city}
        email={activeItem.email}
        phone={activeItem.surname}
      />
    );
  }

  renderVisibleContacts() {
    return (
      this.state.visibleContacts.map((item) => {
        return (
          <Contact
            key={item.id}
            activeRow={this.state.activeId}
            id={item.id}
            active={item.active}
            name={item.name}
            surname={item.surname}
            city={item.city}
            email={item.email}
            phone={item.phone}
            onSetActiveContact={this.handleSetActiveContact}
          />
        );
      })
    );
  }

  render() {
    const sortArrow = this.state.sortDirection === 'asc' ?
      <i className="fa fa-arrow-down" aria-hidden="true" /> :
      <i className="fa fa-arrow-up" aria-hidden="true" />;

    return (
      <section className="content">
        <FiltersBar onFilterContacts={this.handleFilterContacts} />
        <div className="top-container contacts-container">
          <aside>
            {this.renderActiveContact()}
          </aside>
          <main>
            <table border="0" cellSpacing="0" cellPadding="0">
              <thead>
                <tr>
                  <th onClick={this.handleSortContacts}>
                    Name
                    {this.state.sortedTable ?
                    sortArrow :
                    <i className="fa fa-sort" aria-hidden="true" />
                  }
                  </th>
                  <th>Surname</th>
                  <th>City</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {this.renderVisibleContacts()}
              </tbody>
            </table>
          </main>
        </div>
      </section>
    );
  }
}
