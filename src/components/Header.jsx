import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="red"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme="red">
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="red">
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="red">
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="red">
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme="red" w={'30'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="red"
                w={'30'}
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
