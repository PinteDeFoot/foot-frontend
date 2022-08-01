import React from 'react';
import { Global } from '@emotion/react';
import { Router } from './Router/Router';
import { globalStyle } from './common/style/globalStyle';
import { ChakraProvider } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <>
      <ChakraProvider>
        <Global styles={globalStyle} />
        <Router />
      </ChakraProvider>
    </>
  );
};

export default App;
