import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { AspectRatio, Box, Flex, Heading, HStack, Image, Link, SpaceProps, Tag, Text } from '@chakra-ui/react';
import { LikesAndCommentsInfo } from '../LikesAndCommentsInfo';

export const ArticleCard: React.FC = () => {
  return (
    <Box w="100%" border={'1px solid'} borderColor={'gray.200'} p={'4'} borderRadius="lg">
      <Box borderRadius="lg" overflow="hidden">
        <Link
          as={ReactRouterLink}
          to={'/articles/slugExemple'}
          textDecoration="none"
          _hover={{ textDecoration: 'none' }}
        >
          <AspectRatio maxW="400px" ratio={3 / 2}>
            <Image
              transform="scale(1.0)"
              src={
                'https://upload.wikimedia.org/wikipedia/commons/2/28/2021-12-07_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2782_by_Stepro.jpg'
              }
              alt="some text"
              objectFit="contain"
              width="100%"
              transition="0.2s ease-in-out"
              _hover={{
                opacity: 0.85,
              }}
            />
          </AspectRatio>
        </Link>
      </Box>
      <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
      <Heading fontSize="xl" marginTop="2">
        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
          Some blog title
        </Link>
      </Heading>
      <Text as="p" fontSize="md" marginTop="2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
      <Flex justify={'space-between'} align={'center'} marginTop="2">
        <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
        <LikesAndCommentsInfo />
      </Flex>
    </Box>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = ({ date, name }: BlogAuthorProps) => {
  return (
    <HStack spacing="2" display="flex" alignItems="center" fontSize={'sm'}>
      <Text color={'gray.500'} fontWeight="medium">
        {`Par @${name} · ${date.toLocaleDateString()}`}
      </Text>
    </HStack>
  );
};

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="subtle" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};
