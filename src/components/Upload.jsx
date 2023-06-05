import {
  Button,
  Center,
  Container,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'conatainer.xl'} h={'100vh'} p={'16'}>
      <VStack color={'red'} h={'full'} justifyContent={'Center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form action="">
          <HStack>
            <Input
              required
              type={'file'}
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100% + 30px)',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'purple',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                },
              }}
            />
            <Button colorScheme={'red'} type={'submit'}>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
