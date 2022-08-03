import * as React from 'react';
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useArticlePage } from '.';

export const ArticlePage: React.FC = () => {
  useArticlePage();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const imageSrc = 'https://www.recensioniscommesse.com/wp-content/uploads/Kevin_De_Bruyne-300x300.jpg';

  return (
    <>
      <Container>
        <Box onClick={onOpen} cursor={'pointer'} my={'8'}>
          <AspectRatio ratio={3 / 2}>
            <Image src={imageSrc} width={'full'} borderRadius={'lg'} />
          </AspectRatio>
        </Box>
        <Heading>FC Barcelone : nouveau rebondissement dans le dossier Memphis Depay</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quo eos labore ipsa aliquid. Nemo quidem, modi
          sed totam saepe illum excepturi numquam, dolore maxime sit quos corporis commodi explicabo. Blanditiis iure,
          nemo praesentium beatae sit ducimus veritatis facere laudantium ea sapiente! Quibusdam, aperiam quo quam ipsum
          ex molestias ut dicta fugiat voluptatum ducimus incidunt culpa suscipit expedita mollitia accusamus! Quod
          placeat dolorum rerum impedit odio ipsam dolores eveniet libero voluptatibus veniam magnam non quaerat quo,
          eaque dolorem expedita. Quaerat corrupti expedita reprehenderit architecto voluptas exercitationem
          voluptatibus est incidunt optio. Dolore placeat ratione tempora corrupti necessitatibus repudiandae vitae
          corporis, dolorem repellat quae repellendus nemo distinctio soluta vero quam obcaecati libero quidem odit,
          quas sint amet! Repellendus odio distinctio velit modi?
        </Text>
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
