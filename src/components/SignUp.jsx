import React from 'react';
import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
const SignUp = () => {
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
          <Heading>Video Hub</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder={'name'}
            type={'text'}
            required
            focusBorderColor={'purple.500'}
          />
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

          <Button w={'full'} colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Signed Up?
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/Login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
