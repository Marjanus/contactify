import React from 'react';

import Header from '../containers/Header';
import Contacts from '../containers/Contacts';
import Footer from './Footer';

const AppWrapper = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Contacts />
      <Footer />
    </div>
  );
};

export default AppWrapper;
