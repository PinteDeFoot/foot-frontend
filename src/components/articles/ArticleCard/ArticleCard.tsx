import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { AspectRatio, Box, Flex, Heading, HStack, Image, Link, SpaceProps, Tag, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { CommentsInfo } from '../../CommentsInfo';
import { isLocalMockEnabled } from '../../../common/constants/globalAppSettings';

interface ArticleProps {
  article: any;
}
export const ArticleCard = (props: ArticleProps) => {
  const { author, categories, content, date, image, stats } = props.article;
  const slug = content.path.split('/')[3];
  return (
    <Box w="100%">
      <Box overflow="hidden">
        <Link
          as={ReactRouterLink}
          to={`/articles/${content.id}/${slug}`}
          textDecoration="none"
          _hover={{ textDecoration: 'none' }}
        >
          <AspectRatio maxW="400px" ratio={3 / 2}>
            <Image
              borderRadius={'md'}
              src={isLocalMockEnabled ? `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/400/300` : image}
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
      <BlogTags tags={categories} marginTop="3" />
      <Link
        as={ReactRouterLink}
        to={`/articles/${content.id}/${slug}`}
        textDecoration="none"
        _hover={{ textDecoration: 'none' }}
      >
        <Heading fontSize="xl" marginTop="2">
          {content.title}
        </Heading>
      </Link>
      <Text as="p" fontSize="md" marginTop="2">
        {content.excerpt}
      </Text>
      <Flex justify={'space-between'} align={'center'} marginTop="2">
        <BlogAuthor name={author.name} date={dayjs(date * 1000).fromNow()} />
        <CommentsInfo commentsCount={Number(stats.comments)} />
      </Flex>
    </Box>
  );
};

interface BlogAuthorProps {
  date: string;
  name: string;
}
export const BlogAuthor = ({ date, name }: BlogAuthorProps) => {
  return (
    <HStack spacing="2" display="flex" alignItems="center" fontSize={'sm'}>
      <Text color={'gray.500'} fontWeight="medium" fontSize={'13px'}>
        {`Par @${name} · ${date}`}
      </Text>
    </HStack>
  );
};

interface IBlogTags {
  tags: Record<string, string>[];
  marginTop?: SpaceProps['marginTop'];
}
const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map(({ name }) => {
        return (
          <Tag size={'sm'} variant="subtle" colorScheme="orange" key={name}>
            {name}
          </Tag>
        );
      })}
    </HStack>
  );
};
