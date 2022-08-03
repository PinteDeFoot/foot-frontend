import * as React from 'react';
import { Box, Heading, Text, Button, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading display="inline-block" as="h2" size="2xl" color={'red.400'}>
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>
      <Link as={ReactRouterLink} to="/">
        <Button bg="red.400" color="white" variant="solid">
          Go to Home
        </Button>
      </Link>
    </Box>
  );
};
