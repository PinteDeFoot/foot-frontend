import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';

// interface ActuCardProps {}

export const ActuCard: React.FC = () => {
  return (
    <>
      <Link as={ReactRouterLink} to={'#'}>
        <Box width={'100%'} borderRadius={'md'} p={'2'} border={'1px solid'} borderColor={'gray.200'}>
          <Flex direction={'row'} align={'flex-start'}>
            <Box flex={'0 0 60px'} mr={'4'}>
              <Image
                src="https://www.recensioniscommesse.com/wp-content/uploads/Kevin_De_Bruyne-300x300.jpg"
                borderRadius={'full'}
              />
            </Box>
            <Box>
              <Heading as={'h4'} fontSize={'16px'} fontWeight={'semibold'} mb={'4px'}>
                Blessé aux ischios-jambiers, Thiago Alcántara sera absent six semaines
              </Heading>
              <Text fontSize={'13px'} color={'gray.500'}>
                Il y a 23 minutes
              </Text>
            </Box>
          </Flex>
        </Box>
      </Link>
    </>
  );
};
