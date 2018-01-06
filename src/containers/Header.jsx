import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <div>Contactify <i className="fa fa-user" aria-hidden="true" /></div>
          <div>
            <ul>
              <li>Dashboard</li>
              <li>Contacts</li>
              <li>Notifications</li>
            </ul>
          </div>
          <div>
            <form action="" method="get">
              <input type="text" name="search" />
              <button type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
            </form>
          </div>
          <div id="profile-dropdown">
            <div>
              <i className="fa fa-user" aria-hidden="true" />
              <span>Jorah Mormont</span>
              <i className="fa fa-chevron-down" aria-hidden="true" />
            </div>
            <div>
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
