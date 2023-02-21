import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';


export default function Landing() {
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
            direction={'column'}
            spacing={3}
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
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
