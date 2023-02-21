import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { Routes, Route } from 'react-router-dom';


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
      </Grid>
    </Box>
  </ChakraProvider>
)
