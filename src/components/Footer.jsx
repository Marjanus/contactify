import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <ul>
          <li>Dashboard</li>
          <li>Contacts</li>
          <li>Notifications</li>
        </ul>
        <ul>
          <li>&#9400; 2015 Contactify</li>
          <li>About</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div>
        <div>
          <div>
            <p>
              <i className="fa fa-cloud-upload" aria-hidden="true" />
              Last synced:<br />2015-06-02 14:33:10
            </p>
          </div>
          <div>
            <p><i className="fa fa-refresh" aria-hidden="true" />Force sync</p>
          </div>
        </div>
        <div>
          <p>
            <i className="fa fa-stethoscope" aria-hidden="true" />
            Help desk and Resolution center available: <br />
            I-IV: 8:00-18:00, V:8:00-16:45
          </p>
        </div>
      </div>
      <div>
        <ul>
          <li>Groups</li>
          <li>Recently contacted</li>
          <li>Preferences</li>
          <li>Log out</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
