import {AspectRatio, Box, Circle, Image} from 'native-base';
import React from 'react';

const ClippedImage = ({
  source = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
}) => {
  return (
    <Box overflow="hidden">
      <AspectRatio ratio={1 / 1}>
        <Image source={{uri: source}} />
      </AspectRatio>
      <Circle
        backgroundColor="brand.dark"
        w="180%"
        height="800px"
        position="absolute"
        bottom={-700}
        left="-40%"
      />
      <Circle
        backgroundColor="brand.dark"
        w="180%"
        height="800px"
        position="absolute"
        top={-700}
        left="-40%"
      />
    </Box>
  );
};

export default ClippedImage;
