import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import { TopForumItem } from '../TopForumItem';

export const TopForum: React.FC = () => {
  return (
    <>
      <VStack spacing={'3'}>
        <TopForumItem color="red" />
        <TopForumItem color="orange" />
        <TopForumItem color="green" />
      </VStack>
    </>
  );
};
