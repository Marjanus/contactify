import React from 'react';

import Header from '../containers/Header';
import FiltersBar from '../containers/FiltersBar';
import Contacts from '../containers/Contacts';
import Footer from './Footer';

const AppWrapper = () => {
  return (
    <div>
      <Header />
      <FiltersBar />
      <Contacts />
      <Footer />
    </div>
  );
};

export default AppWrapper;
