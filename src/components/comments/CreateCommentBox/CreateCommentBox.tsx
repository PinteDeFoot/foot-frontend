import * as React from 'react';
import {
  FormControl,
  FormHelperText,
  Textarea,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Box,
  Flex,
  IconButton,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Remarkable } from 'remarkable';
import { AiOutlineSend } from 'react-icons/ai';
import { markdownStyle } from '../../../common/style/globalStyle';
import { FaRegImage } from 'react-icons/fa';
import { RiFileGifFill } from 'react-icons/ri';

export const CreateCommentBox = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [tabIndex, setTabIndex] = React.useState(0);
  const [value, setValue] = React.useState('');

  return (
    <Tabs variant="enclosed" onChange={(index) => setTabIndex(index)} my={'16px'}>
      <TabList>
        <Tab>Edit</Tab>
        <Tab>Preview</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <EditBox setValue={setValue} value={value} />
        </TabPanel>
        <TabPanel>
          <PreviewBox value={value} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

interface EditBoxProps {
  value: string;
  setValue: (v: string) => void;
}
const EditBox = ({ value, setValue }: EditBoxProps) => {
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const [imgUrl, setImgUrl] = React.useState('');

  React.useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 5 + 'px';
    }
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };
  const handleImgUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setImgUrl(inputValue);
  };

  return (
    <Flex align={'flex-end'} maxW={'980px'}>
      <FormControl position={'relative'}>
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={handleInputChange}
          placeholder="Écrivez un commentaire"
          variant={'filled'}
          resize="none"
          sx={{ borderRadius: '10px' }}
        />
        <Box position={'absolute'} bottom={'20px'} right={'12px'}>
          <HStack spacing={'0'}>
            <Popover>
              <PopoverTrigger>
                <IconButton
                  variant={'ghost'}
                  size="sm"
                  aria-label="Search database"
                  icon={<FaRegImage size={'20px'} />}
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={'text'}
                      placeholder="url de l'image"
                      value={imgUrl}
                      onChange={handleImgUrlChange}
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={() => {
                          const imgLink = `\r\n\n![img](${imgUrl})`;
                          setValue(`${value}${imgLink}`);
                        }}
                      >
                        {'Insérer'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger>
                <IconButton
                  variant={'ghost'}
                  size="sm"
                  aria-label="Search database"
                  icon={<RiFileGifFill size={'20px'} />}
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                  <Input variant={'outline'} placeholder="gif url" />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
        </Box>
        <FormHelperText></FormHelperText>
      </FormControl>
      <IconButton
        variant={'solid'}
        size="lg"
        m={'8px'}
        aria-label="Search database"
        icon={<AiOutlineSend size={'20px'} />}
      />
    </Flex>
  );
};

interface PreviewBoxProps {
  value: string;
}
const PreviewBox = ({ value }: PreviewBoxProps) => {
  const md = new Remarkable();
  return (
    <Box css={markdownStyle}>
      <Box
        className="markdown-body"
        minH={'81px'}
        maxW={'980px'}
        py={'8px'}
        px={'16px'}
        mb={'7px'}
        border={'2px solid transparent'}
        borderRadius={'10px'}
        dangerouslySetInnerHTML={{ __html: md.render(value || 'Nothing to preview') }}
      />
    </Box>
  );
};
