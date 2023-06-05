import React from 'react';
import {
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Text,
  Avatar,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const Signup = () => {
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
          <Heading textAlign={'center'}>Create account</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder={'Name'}
            type={'text'}
            required
            focusBorderColor={'red.500'}
          ></Input>
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

          <Button colorScheme="red" type="submit">
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Existing User?{'   '}
            <Button variant={'link'} alignSelf={'flex-end'} colorScheme="red">
              <Link to={'/login'}>Login In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
