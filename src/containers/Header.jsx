import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { dropdownActivated: false };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({ dropdownActivated: !this.state.dropdownActivated });
  }

  render() {
    const dropDownClass = this.state.dropdownActivated ?
      'profile-dropdown-list visible' :
      'profile-dropdown-list hidden';

    return (
      <header>
        <div className="top-container">
          <div className="header-logo">
            <img src="/src/utils/logo.jpg" alt="logo" />
          </div>
          <div className="header-switcher">
            <ul>
              <li>Dashboard</li>
              <li className="active">Contacts</li>
              <li>Notifications</li>
            </ul>
          </div>
          <div className="header-search">
            <form action="" method="get">
              <input type="text" placeholder="Search" name="search" />
              <button type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
            </form>
          </div>
          <div id="profile-dropdown">
            <div className="profile-dropdown-switcher" onClick={this.toggleDropdown}>
              <i className="fa fa-user" aria-hidden="true" />
              <span>Jorah Mormont</span>
              <i className="fa fa-sort-desc" aria-hidden="true" />
            </div>
            <div className={dropDownClass}>
              <ul>
                <li><i className="fa fa-users" aria-hidden="true" />Groups</li>
                <li><i className="fa fa-comments" aria-hidden="true" />Frequently contacted</li>
                <li><i className="fa fa-wrench" aria-hidden="true" />Preferences</li>
                <li><i className="fa fa-power-off" aria-hidden="true" />Log out</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
