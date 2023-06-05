import React from 'react';
import {
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>Welcome Back</Heading>
          <Input
            placeholder={'email'}
            type={'email'}
            required
            focusBorderColor={'red.500'}
          ></Input>
          <Input
            placeholder={'password'}
            type={'password'}
            required
            focusBorderColor={'red.500'}
          ></Input>

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password</Link>
          </Button>
          <Button colorScheme="red" type="submit">
            Log In
          </Button>
          <Text textAlign={'right'}>
            New User?{'   '}
            <Button variant={'link'} alignSelf={'flex-end'} colorScheme="red">
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
