import * as React from 'react';
import { Container, Stack, Flex, Box, Heading, Text, Button, Image, AspectRatio, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useHome } from '.';
import { ArticleCards } from '../../components/articles/ArticleCards';
import { TopForum } from '../../components/forum/TopForum';
import { ActuCards } from '../../components/articles/ActuCards';

export const Home: React.FC = () => {
  useHome();
  return (
    <>
      <Container maxW={'7xl'} pb={'120px'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Box flex={1}>
            <Link
              as={ReactRouterLink}
              to={'/articles/slugExemple'}
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
              <AspectRatio maxW="800px" ratio={3 / 2}>
                <Image
                  borderRadius={'md'}
                  src={`https://picsum.photos/600/400`}
                  alt="some text"
                  width="100%"
                  transition="0.2s ease-in-out"
                  _hover={{
                    opacity: 0.85,
                  }}
                />
              </AspectRatio>
            </Link>
          </Box>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading as={'h3'} color={'red.700'} fontSize={'6xl'}>
              Arsenio Iglesias, coach mythique du Depor
            </Heading>
            <Text color={'gray.500'}>
              Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and
              even sync them in the cloud so you can use them anywhere. All that is free!
            </Text>
            <Button size={'md'} fontWeight={'normal'} px={6} maxW={'120px'}>
              Lire l&apos;article
            </Button>
          </Stack>
        </Stack>
        <Flex>
          <Box flex={'auto'} mr={'60px'}>
            <Heading as={'h4'} mb={'4'} size={'md'}>
              Derniers articles:
            </Heading>
            <ArticleCards />
          </Box>
          <Box flex={'0 0 480px'}>
            <Heading as={'h4'} mb={'4'} size={'md'}>
              Discussions populaires sur le forum:
            </Heading>
            <TopForum />
            <Heading as={'h4'} mb={'4'} mt={'12'} size={'md'}>
              Dernières actus:
            </Heading>
            <ActuCards />
          </Box>
        </Flex>
      </Container>
    </>
  );
};
