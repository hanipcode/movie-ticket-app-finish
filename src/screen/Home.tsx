import {Box, Heading, Text} from 'native-base';
import React from 'react';
import ClippedImage from '../components/ClippedImage';

const Home = () => {
  return (
    <Box backgroundColor="brand.dark" height="100%" p="4">
      <Text>Welcome Joko 👋🏻</Text>
      <Heading>test</Heading>
      <ClippedImage />
    </Box>
  );
};

export default Home;
