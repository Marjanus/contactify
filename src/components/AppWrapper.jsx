import React from 'react';

import Header from '../containers/Header';
import Content from '../containers/Content';
import Footer from './Footer';

const AppWrapper = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default AppWrapper;
