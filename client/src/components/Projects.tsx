/* eslint-disable react-hooks/rules-of-hooks */
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Button
} from '@chakra-ui/react';

const projects = [
  {
    heading: 'Cancer Care',
    content: 'Help support therapy for patients undergoing chemo',
    icon: (
      <svg
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
      </svg>
    )
  },
  {
    heading: 'Invoicing',
    content: 'Webhooks are wired up to automatically email customers PDF receipts and invoices.',
    icon: (
        <svg
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
        </svg>
      )
  },
  {
    heading: 'API Included',
    content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
    icon: (
        <svg
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
        </svg>
      )
  }
];

const Features = () => {
  return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
        Projects
      </chakra.h3>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4}>
        {projects.map((project, index) => (
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
              {project.icon}
            </Flex>
            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
              {project.heading}
            </chakra.h3>
            <Text fontSize="md" mt={4}>
              {project.content}
            </Text>
            <Button
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
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Features;