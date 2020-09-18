import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import List from '@/components/List';

export default function AppContainer() {
  return (
    <React.Fragment>
      <Header />
      <List />
      <Footer />
    </React.Fragment>
  );
}
