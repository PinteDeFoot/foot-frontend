import * as React from 'react';
import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

interface TopForumItemProps {
  color: string;
}
export const TopForumItem = (props: TopForumItemProps) => {
  return (
    <>
      <Link as={ReactRouterLink} to={'#'}>
        <Box
          bg={`${props.color}.100`}
          width={'100%'}
          borderRadius={'md'}
          p={'2'}
          sx={{
            _hover: {
              opacity: 0.85,
            },
          }}
          transition="0.2s ease-in-out"
        >
          <Flex direction={'row'} align={'flex-start'}>
            <Box flex={'0 0 60px'} mr={'4'}>
              <Image
                src="https://www.recensioniscommesse.com/wp-content/uploads/Kevin_De_Bruyne-300x300.jpg"
                borderRadius={'full'}
              />
            </Box>
            <Box>
              <Heading as={'h4'} size={'15px'} fontWeight={'semibold'} mb={'4px'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, exercitationem ?
              </Heading>
              <Text fontSize={'13px'} color={`${props.color}.700`}>
                Dernier commentaire par @Sebek il y a 45 minutes
              </Text>
            </Box>
          </Flex>
        </Box>
      </Link>
    </>
  );
};
