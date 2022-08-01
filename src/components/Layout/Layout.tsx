import * as React from 'react';
import { Footer } from '../Footer';
import { Navigation } from '../Navigation';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
