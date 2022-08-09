import * as React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { FaRegComment } from 'react-icons/fa';

interface CommentsInfoProps {
  commentsCount: number;
}
export const CommentsInfo = (props: CommentsInfoProps) => {
  const { commentsCount } = props;
  return (
    <>
      <HStack spacing={'12px'} color={'gray.500'} fontSize={'sm'}>
        <Box as={'span'}>
          <HStack spacing={'4px'}>
            <span>{commentsCount}</span> <FaRegComment />
          </HStack>
        </Box>
      </HStack>
    </>
  );
};
