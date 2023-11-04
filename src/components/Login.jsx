import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import React from 'react';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'center'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>
          <Input
            placeholder={'email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgotpassword'}>
              {/* Corrected the typo 'forgatepassword' */}
              Forgot password?
            </Link>
          </Button>
          <Button w={'full'} colorScheme={'purple'} type={'submit'}>
            Log In
          </Button>
          <Text textAlign={'right'}>
            New User?
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/SignUp'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
