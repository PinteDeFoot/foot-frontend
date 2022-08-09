import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { Router } from './Router/Router';
import { globalStyle } from './common/style/globalStyle';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fr';

// Dayjs global config
dayjs.extend(relativeTime);
dayjs.locale('fr');

// React query config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
    },
  },
});

const App: React.FC = () => {
  return (
    <>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Global styles={globalStyle} />
          <Router />
          <ReactQueryDevtools position={'bottom-right'} />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
