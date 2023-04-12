import {
  AspectRatio,
  Avatar,
  Badge,
  Box,
  Circle,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Pressable,
  ScrollView,
  SearchIcon,
  Tag,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {
  AVATAR_URL,
  FAVORITE_MOVIES,
  LATEST_MOVIES,
  RootParamList,
} from '../constants';
import categories from '../data/categories.json';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Home = ({navigation}: NativeStackScreenProps<RootParamList, 'Home'>) => {
  return (
    <ScrollView backgroundColor="brand.dark" p="4">
      <HStack justifyContent="space-between" alignItems="center">
        <VStack>
          <Text>Welcome, Hanif!</Text>
          <Heading size="md">Let's relax and watch a movie !</Heading>
        </VStack>
        <Avatar source={{uri: AVATAR_URL}} size="md" />
      </HStack>
      <Input
        mt="8"
        InputLeftElement={<SearchIcon ml="4" size="lg" />}
        borderRadius="full"
        borderWidth={0}
        placeholder="Search movie..."
        fontSize={16}
        backgroundColor="brand.gray"
      />
      <HStack alignItems="flex-end" justifyContent="space-between" mt="8">
        <Heading size="lg">Categories</Heading>
        <Pressable onPress={() => {}}>
          <Text fontSize={16} color="brand.orange">
            View all
          </Text>
        </Pressable>
      </HStack>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack space="2" alignItems="center" mt="4" mb="6">
          {categories.map(name => (
            <Box py="2" px="4" backgroundColor="brand.gray" borderRadius="full">
              {name}
            </Box>
          ))}
        </HStack>
      </ScrollView>
      <HStack alignItems="flex-end" justifyContent="space-between" mt="6">
        <Heading size="lg">Latest Movie</Heading>
        <Pressable onPress={() => {}}>
          <Text fontSize={16} color="brand.orange">
            View all
          </Text>
        </Pressable>
      </HStack>
      <HStack space="8" mt="4">
        {LATEST_MOVIES.map(movie => (
          <Pressable
            flex="1"
            onPress={() => navigation.navigate('Detail', movie)}>
            <VStack flex="1">
              <AspectRatio ratio={3 / 4}>
                <Image
                  source={{uri: movie.poster}}
                  alt="poster"
                  resizeMode="cover"
                  borderRadius="16"
                />
              </AspectRatio>
              <Text fontWeight="bold" fontSize={14} mt="4">
                {movie.name}
              </Text>
            </VStack>
          </Pressable>
        ))}
      </HStack>
      <HStack alignItems="flex-end" justifyContent="space-between" mt="6">
        <Heading size="lg">Favorite Movie</Heading>
        <Pressable onPress={() => {}}>
          <Text fontSize={16} color="brand.orange">
            View all
          </Text>
        </Pressable>
      </HStack>
      <HStack space="8" mt="4" mb="16">
        {FAVORITE_MOVIES.map(movie => (
          <VStack flex="1">
            <AspectRatio ratio={3 / 4}>
              <Image
                alt="poster"
                source={{uri: movie.poster}}
                resizeMode="cover"
                borderRadius="16"
              />
            </AspectRatio>
            <Text fontWeight="bold" fontSize={14} mt="4">
              {movie.name}
            </Text>
          </VStack>
        ))}
      </HStack>
    </ScrollView>
  );
};

export default Home;
