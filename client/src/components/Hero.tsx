import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import {useRef, useState} from 'react';
import axios from 'axios'


export default function Landing() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  let [projectDescription, setProjectDescription] = useState('')
  let [projectname, setProjectname] = useState('')

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const handleSubmit = (event:any) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/project`, {name:projectname, description:projectDescription})
      .then(response => {
        setProjectDescription("")
        setProjectname("")
        onClose()
      })
      .catch(error => {
        console.log(error);
      });
  };


  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            {/* Make money from <br /> */}
            <Text as={'span'} color={'green.400'}>
              Sats Donate
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Donate to your favaorite projects and organisations privately using Bitcoin and the ligthning Network
          </Text>

          <Stack
            spacing={6}
            direction={'row'}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
          <Link to="/projects"><Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
             View Projects
            </Button></Link>
          <Button onClick={onOpen} rounded={'full'} px={6}>
            Create Project
          </Button>
        </Stack>
        </Stack>
      </Container>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Project name</FormLabel>
              <Input ref={initialRef} placeholder='Name' onChange={e => setProjectname(e.target.value)} value={projectname} />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Project description</FormLabel>
              <Textarea
                value={projectDescription}
                onChange={e => setProjectDescription(e.target.value)}
                placeholder='Here is a sample placeholder'
                size='sm'
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
