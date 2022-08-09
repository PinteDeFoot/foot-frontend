import * as React from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  // useToast,
  // Spinner,
} from '@chakra-ui/react';
// import { useGetUserDetails, usePostUserLogin } from '../../api/users';
// import { useStore } from '../../store';
// import { useNavigate } from 'react-router-dom';

export const Login = () => {
  // const toast = useToast();
  // const navigate = useNavigate();
  // const { setUserDetails, userDetails } = useStore();
  // const { mutate, data, isLoading } = usePostUserLogin();
  // const { user, isError, isLoading: loadingUser } = useGetUserDetails(userDetails?.userId);
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  // const handleConnectClick = () => {
  //   mutate({ username, password });
  // };

  // const addErrorToast = React.useCallback(
  //   () =>
  //     toast({
  //       title: "Oups. Une erreur s'est produite",
  //       description: 'Réésayez de vous connecter',
  //       status: 'error',
  //       duration: 5000,
  //     }),
  //   [toast],
  // );

  // React.useEffect(() => {
  //   if (data) {
  //     setUserDetails({ userId: data.data.userId });
  //   }
  // }, [data]);

  // React.useEffect(() => {
  //   if (user) {
  //     setUserDetails(user);
  //     navigate('/');
  //   }
  // }, [user]);

  // if (isError) {
  //   addErrorToast();
  // }

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')} pb={'120px'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'}>Connectez-vous à votre compte</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>Se souvenir de moi</Checkbox>
                <Link color={'blue.400'}>Password oublié ?</Link>
              </Stack>
              <Button
                bg={'red.400'}
                color={'white'}
                _hover={{
                  bg: 'red.300',
                }}
                onClick={() => console.log(`username: ${username}, psw: ${password}`)}
              >
                Se connecter
                {/* {data && (isLoading || loadingUser) ? <Spinner /> : 'Se connecter'} */}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
