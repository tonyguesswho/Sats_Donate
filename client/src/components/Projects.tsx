/* eslint-disable react-hooks/rules-of-hooks */
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Button,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useClipboard
} from '@chakra-ui/react';
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code'

function ProjectItem({ name, description, index, id }:any) {
  const [amount, setAmount] = useState(1000);
  const [invoice, setInvoice] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  const handleDonate = (id:number) => {
    console.log(id, "pppp", amount)
    axios.post(`${process.env.REACT_APP_API_URL}/donation`, {amount, projectId:id})
      .then(async(response )=> {
        if(response.statusText === "OK"){
          console.log(response, "gggg")
          setInvoice(response.data.data.paymentRequest)
          setValue(response.data.data.paymentRequest)
          const dataInvoiceStream = await (await fetch(`${process.env.REACT_APP_API_URL}/node/check`)).json()
          onOpen()
        }

      })
      .catch(error => {
        console.log(error);
      });
  };


  const handleAmountChange = (value:any) => setAmount(value)

  return (
    <>
    <Box
    key={index}
    bg={useColorModeValue('gray.100', 'gray.700')}
    p={6}
    rounded="lg"
    textAlign="center"
    pos="relative"
  >
    <Flex
      p={2}
        w="max-content"
        color="white"
        bgGradient="linear(to-br, #228be6, #15aabf)"
        rounded="md"
        marginInline="auto"
        pos="absolute"
        left={0}
        right={0}
        top="-1.5rem"
        boxShadow="lg"
      >
        {<svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      ></path>
      </svg>}
    </Flex>

    <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
      {name}
    </chakra.h3>
    <Text fontSize="md" mt={4} w={300}>
      {description}
    </Text>
    <FormControl isRequired>
      <NumberInput defaultValue={2000} min={10} onChange={handleAmountChange} value={amount}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
    <Button
    onClick={() => handleDonate(id)}
      colorScheme={'green'}
      bg={'green.400'}
      mt={6}
      rounded={'full'}
      px={6}
      _hover={{
        bg: 'green.300',
      }}>
     Donate
    </Button>
  </Box>
  <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ligthning Payment Invoice</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Box  textAlign="center">
          <QRCode value={invoice || ""}/>
          <Text mt={4}>{invoice}</Text>
          <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
          </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </>
  );
}

const Features = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/project`)
    .then(response => {
      const {data} = response
      setProjects(data.data)
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
        Projects
      </chakra.h3>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4}>
        {projects.map((project:any, index) => (
          <ProjectItem name={project.name} description={project.description} index={index} id={project.id} />

        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Features;