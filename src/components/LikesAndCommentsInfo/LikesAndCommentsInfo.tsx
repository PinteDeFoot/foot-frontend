import * as React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { FaRegComment, FaRegThumbsUp } from 'react-icons/fa';

export const LikesAndCommentsInfo: React.FC = () => {
  return (
    <>
      <HStack spacing={'12px'} color={'gray.500'} fontSize={'sm'}>
        <Box as={'span'}>
          <HStack spacing={'4px'}>
            <span>123</span> <FaRegThumbsUp />
          </HStack>
        </Box>
        <Box as={'span'}>
          <HStack spacing={'4px'}>
            <span>13</span> <FaRegComment />
          </HStack>
        </Box>
      </HStack>
    </>
  );
};
