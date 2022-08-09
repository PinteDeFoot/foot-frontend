import { VStack } from '@chakra-ui/react';
import * as React from 'react';
import { ActuCard } from '../ActuCard/ActuCard';

// interface ActuCardsProps {}

export const ActuCards: React.FC = () => {
  return (
    <VStack spacing={'3'}>
      <ActuCard />
      <ActuCard />
      <ActuCard />
      <ActuCard />
      <ActuCard />
      <ActuCard />
      <ActuCard />
      <ActuCard />
      <ActuCard />
      <ActuCard />
    </VStack>
  );
};
