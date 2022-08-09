import * as React from 'react';
import dayjs from 'dayjs';
import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spinner,
  Tag,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useArticlePage } from '.';
import { useGetArticleDetails } from '../../api/articles';
import { useParams } from 'react-router-dom';
import { CommentsInfo } from '../../components/CommentsInfo';
import { CreateCommentBox } from '../../components/comments/CreateCommentBox';

export const ArticlePage: React.FC = () => {
  useArticlePage();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  const { article, error, isLoading } = useGetArticleDetails(id || '');

  const imageSrc = 'https://www.recensioniscommesse.com/wp-content/uploads/Kevin_De_Bruyne-300x300.jpg';

  if (isLoading) return <Spinner />;
  if (error) return <div>ERROR...</div>;

  const { author, categories, content, date, image, stats } = article;

  return (
    <>
      <Container mt={'60px'} maxW={'container.md'} sx={{ p: { my: '12px' } }} pb={'120px'}>
        <Heading mb={'8'}>{content.title}</Heading>
        {image && (
          <Box onClick={onOpen} cursor={'pointer'} my={'8'}>
            <AspectRatio ratio={3 / 2}>
              <Image src={image} width={'full'} borderRadius={'lg'} />
            </AspectRatio>
          </Box>
        )}
        <Flex justify={'flex-start'} mb={'4'}>
          <Text color={'gray.500'} mr={'8'}>{`Le ${dayjs(date * 1000).format('dddd D MMMM YYYY à h:mm')} par @${
            author.name
          }`}</Text>
          <CommentsInfo commentsCount={stats.comments} />
        </Flex>
        <Box mb={'8'}>
          <div dangerouslySetInnerHTML={{ __html: content.text }}></div>
        </Box>
        {categories.length > 0 && (
          <>
            <HStack mb={'16'}>
              <Heading as={'h5'} fontSize={'24px'}>
                Catégories:
              </Heading>
              {categories.map((c: any) => (
                <Tag size={'sm'} variant="subtle" colorScheme="orange" key={c.name}>
                  {c.name}
                </Tag>
              ))}
            </HStack>
          </>
        )}
        <CreateCommentBox />
      </Container>
      <ImageModal imageSrc={imageSrc} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

interface ImageModalProps {
  imageSrc: string;
  isOpen: boolean;
  onClose: VoidFunction;
}
const ImageModal = ({ imageSrc, isOpen, onClose }: ImageModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
      <ModalOverlay bg="blackAlpha.800" />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody py={'16'}>
          <Image src={imageSrc} width={'full'} />
        </ModalBody>
        <ModalFooter>
          <Text>Credit: John Doe</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
