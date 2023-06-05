import {
  Box,
  Stack,
  VStack,
  HStack,
  Heading,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineSend,
  AiFillYoutube,
  AiFillGoogleCircle,
  AiFillFacebook,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} px={4} w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Subscribe to our newsletter
          </Heading>
          <HStack borderBottom={'2px solid white'} py={2}>
            <Input
              placeholder="abc@gmail.com"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={0}
              colorScheme="red"
              variant={'solid'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          textAlign={'center'}
        >
          <Heading textTransform={'uppercase'} px={2}>
            Video Hub
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="red">
            <a target="blank" href="https://youtube.com">
              <AiFillYoutube />
            </a>
          </Button>
          <Button variant={'link'} colorScheme="green">
            <a target="blank" href="https://google.com">
              <AiFillGoogleCircle />
            </a>
          </Button>
          <Button variant={'link'} colorScheme="blue">
            <a target="blank" href="https://facebook.com">
              <AiFillFacebook />
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
