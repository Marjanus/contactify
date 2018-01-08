import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="top-container">
        <div>
          <ul>
            <li><p><a href="#">Dashboards</a></p></li>
            <li><p><a href="#">Contacts</a></p></li>
            <li><p><a href="#">Notifications</a></p></li>
          </ul>
          <ul>
            <li><p>&#9400; 2015 Contactify</p></li>
            <li><p><a href="#">About</a></p></li>
            <li><p><a href="#">Privacy</a></p></li>
          </ul>
        </div>
        <div>
          <div>
            <div>
              <i className="fa fa-cloud-upload" aria-hidden="true" />
              <p className="footer-paragraph">Last synced:<br />2015-06-02 14:33:10</p>
              <p className="footer-paragraph sync-paragraph">
                <i className="fa fa-refresh" aria-hidden="true" />
                <a href="#">Force sync</a>
              </p>
            </div>
          </div>
          <div>
            <i className="fa fa-stethoscope" aria-hidden="true" />
            <p className="footer-paragraph">
              Help desk and Resolution center available: <br /> I-IV: 8:00-18:00, V:8:00-16:45
            </p>
          </div>
        </div>
        <div>
          <ul>
            <li><p><a href="#">Groups</a></p></li>
            <li><p><a href="#">Recently contacted</a></p></li>
            <li><p><a href="#">Preferences</a></p></li>
            <li><p><a href="#">Log out</a></p></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
