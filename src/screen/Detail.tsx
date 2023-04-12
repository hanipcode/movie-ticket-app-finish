import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../constants';
import {
  AspectRatio,
  Box,
  Button,
  Center,
  FavouriteIcon,
  HStack,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
  useTheme,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Detail = ({
  navigation,
  route,
}: NativeStackScreenProps<RootParamList, 'Detail'>) => {
  const movie = route.params;
  const {colors} = useTheme();
  return (
    <Box>
      <HStack
        position="absolute"
        top="0"
        left={0}
        right={0}
        justifyContent="space-between"
        p="4"
        zIndex={2}>
        <Pressable onPress={() => navigation.pop()}>
          <Box
            alignItems="center"
            justifyContent="center"
            width="10"
            height="10"
            borderRadius="full"
            overflow="hidden">
            <Box
              position="absolute"
              top={0}
              bottom={0}
              left={0}
              right={0}
              background="brand.lightGray"
              opacity={0.2}
            />
            <Ionicons
              name="ios-close-circle-outline"
              size={24}
              color={colors.brand.white}
            />
          </Box>
        </Pressable>
        <Box
          alignItems="center"
          justifyContent="center"
          width="10"
          height="10"
          borderRadius="full"
          overflow="hidden">
          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            background="brand.lightGray"
            opacity={0.2}
          />
          <Ionicons
            name="ios-bookmark-outline"
            size={24}
            color={colors.brand.white}
          />
        </Box>
      </HStack>
      <ScrollView minH="100%" backgroundColor="brand.dark">
        <Box position="relative" top="-20">
          <AspectRatio ratio={3 / 4}>
            <Image source={{uri: movie.poster}} alt="poster" />
          </AspectRatio>
          <LinearGradient
            colors={[colors.brand.dark, 'transparent']}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}
            style={styles.gradient}
          />
        </Box>
        <VStack px="4" space="4" pb="8">
          <HStack space="4" alignItems="center">
            <Box
              borderRadius="full"
              background="brand.yellow"
              px="3"
              h="6"
              alignItems="center">
              <Text color="brand.dark">IMDB {movie.rating}</Text>
            </Box>
            <HStack alignItems="center" space="2">
              <Ionicons name="ios-star" size={20} color={colors.brand.yellow} />
              <Text color="brand.yellow" fontSize="16" fontWeight="500">
                {movie.starRating}
              </Text>
              <Text fontSize="12">({movie.nuumberOfReviews}k reviews)</Text>
            </HStack>
          </HStack>
          <Heading>{movie.name}</Heading>
          <HStack space="4" flexWrap="wrap" mb="-4">
            {movie.categories.map(category => (
              <Box
                borderRadius="full"
                background="brand.gray"
                height="8"
                mb="4"
                px="4"
                justifyContent="center">
                {category}
              </Box>
            ))}
          </HStack>
          <Box mb="16">
            <Text opacity={0.6}>{movie.synopsis}</Text>
          </Box>
        </VStack>
      </ScrollView>
      <Center position="absolute" bottom="0" left="0" right="0">
        <LinearGradient
          colors={[colors.brand.dark, 'transparent']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          style={styles.gradient}
        />
        <Button
          background="brand.orange"
          mb="4"
          px="10"
          borderRadius="full"
          onPress={() => navigation.navigate('Ticket', movie)}>
          <Text fontWeight="bold" fontSize="16">
            Get Reservation
          </Text>
        </Button>
      </Center>
    </Box>
  );
};

const styles = StyleSheet.create({
  gradient: {width: '100%', height: 80, position: 'absolute', bottom: 0},
});

export default Detail;
