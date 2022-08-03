import * as React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export const TopForumItem: React.FC = () => {
  return (
    <>
      <Box bg={'green.200'} width={'600px'} borderRadius={'lg'} p={'4'}>
        <Flex direction={'row'} align={'center'}>
          <Box flex={'0 0 80px'} mr={'4'}>
            <Image
              src="https://www.recensioniscommesse.com/wp-content/uploads/Kevin_De_Bruyne-300x300.jpg"
              borderRadius={'full'}
            />
          </Box>
          <Box>
            <Heading as={'h4'} size={'md'} color={'orange.900'}>
              This is a nice heading for this box
            </Heading>
            <Text color={'orange.800'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, exercitationem quaerat itaque illum
              doloribus hic delectus ullam facere maiores accusamus?
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
