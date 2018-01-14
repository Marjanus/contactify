import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { dropdownActivated: false };

    this.handleToggleDropdown = this.handleToggleDropdown.bind(this);
    this.handlePreventSubmit = this.handlePreventSubmit.bind(this);
  }

  handleToggleDropdown() {
    this.setState({ dropdownActivated: !this.state.dropdownActivated });
  }

  handlePreventSubmit(e) {
    if (e.key === 'Enter') { e.preventDefault(); }
  }

  render() {
    const dropDownClass = this.state.dropdownActivated ?
      'profile-dropdown-list visible' :
      'profile-dropdown-list hidden';

    const arrowIcon = this.state.dropdownActivated ?
      <i className="fa fa-sort-asc" aria-hidden="true" /> :
      <i className="fa fa-sort-desc" aria-hidden="true" />;

    return (
      <header>
        <div className="top-container">
          <div className="header-logo">
            <img src="src/utils/logo.jpg" alt="logo" />
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
              <input
                type="text"
                placeholder="Search"
                name="search"
                onKeyPress={this.handlePreventSubmit}
              />
              <button type="button"><i className="fa fa-search" aria-hidden="true" /></button>
            </form>
          </div>
          <div id="profile-dropdown">
            <div className="profile-dropdown-switcher" onClick={this.handleToggleDropdown}>
              <i className="fa fa-user" aria-hidden="true" />
              <span>Jorah Mormont</span>
              {arrowIcon}
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
