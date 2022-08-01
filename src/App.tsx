import React from 'react';
import { Global } from '@emotion/react';
import { Router } from './Router/Router';
import { globalStyle } from './common/style/globalStyle';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';

const App: React.FC = () => {
  return (
    <>
      <ChakraProvider>
        <Global styles={globalStyle} />
        <Layout>
          <Router />
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default App;
