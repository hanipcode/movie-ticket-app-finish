import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  RootParamList,
  SeatType,
  SeatConfigType,
  SeatConfig,
} from '../constants';
import {
  Box,
  Button,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
  useTheme,
} from 'native-base';
import ClippedImage from '../components/ClippedImage';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = NativeStackScreenProps<RootParamList, 'Ticket'>;

type SeatProps = {
  seat: SeatType;
  isMiddle?: boolean;
};
interface SeatRowProps {
  seats: SeatType[];
  rowNum: number;
}

const Seat = ({isMiddle}: SeatProps) => (
  <Box
    width="6"
    height="6"
    borderRadius="8"
    background="brand.gray"
    mb="4"
    mr={isMiddle ? '6' : '0'}
  />
);

const SeatRow = ({seats, rowNum}: SeatRowProps) => (
  <HStack space="4" justifyContent="center">
    {seats.map((seatData, index) => (
      <Seat
        seat={seatData}
        isMiddle={index === seats.length / 2 - 1}
        key={`Seat-${rowNum}-${index}`}
      />
    ))}
  </HStack>
);

interface SeatsProps {
  config: SeatConfigType;
}
const Seats = ({config}: SeatsProps) => {
  return (
    <Box>
      {config.map((seatRow, i) => (
        <SeatRow seats={seatRow} key={`SeatRow-${i}`} rowNum={i} />
      ))}
    </Box>
  );
};

const Dates = [
  {
    month: 'July',
    date: '02',
  },
  {
    month: 'July',
    date: '03',
  },
  {
    month: 'July',
    date: '04',
  },
  {
    month: 'July',
    date: '05',
  },
  {
    month: 'July',
    date: '06',
  },
  {
    month: 'July',
    date: '07',
  },
  {
    month: 'July',
    date: '08',
  },
  {
    month: 'July',
    date: '09',
  },
];

const Times = ['18:00', '19:000', '20:00', '21:00', '22:00', '23:00'];

const Ticket = ({route, navigation}: Props) => {
  const movie = route.params;
  const {colors} = useTheme();
  return (
    <Box height="100%" background="brand.dark">
      <HStack
        position="absolute"
        top="0"
        left={0}
        right={0}
        justifyContent="space-between"
        alignItems="center"
        p="4"
        mt="2"
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
        <HStack
          alignItems="center"
          height="8"
          px="4"
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
            name="ios-time-outline"
            size={20}
            color={colors.brand.white}
          />
          <Text fontSize={12} ml="2">
            {movie.duration}
          </Text>
        </HStack>
      </HStack>
      <Box position="absolute" height="400" width="100%">
        <ClippedImage source={movie.poster} />
        <LinearGradient
          colors={[colors.brand.dark, 'transparent']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradientLeft}
        />
        <LinearGradient
          colors={[colors.brand.dark, 'transparent']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          style={styles.gradientRight}
        />
      </Box>
      <Box mt="280">
        <Seats config={SeatConfig} />
      </Box>
      <HStack justifyContent="space-evenly" mt="4">
        <HStack alignItems="flex-end" space="2">
          <Box
            borderRadius="full"
            width="4"
            height="4"
            backgroundColor="brand.white"
          />
          <Text fontSize={12}>Available</Text>
        </HStack>
        <HStack alignItems="flex-end" space="2">
          <Box
            borderRadius="full"
            width="4"
            height="4"
            backgroundColor="brand.gray"
          />
          <Text fontSize={12}>Reserved</Text>
        </HStack>
        <HStack alignItems="flex-end" space="2">
          <Box
            borderRadius="full"
            width="4"
            height="4"
            backgroundColor="brand.orange"
          />
          <Text fontSize={12}>Selected</Text>
        </HStack>
      </HStack>
      <Box mt="4" px="4">
        <Text>Select date:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space="4" mt="4" mb="4">
            {Dates.map(({month, date}) => (
              <VStack
                alignItems="center"
                py="3"
                px="4"
                borderRadius={8}
                key={`Date-${month}-${date}`}
                background="brand.gray">
                <Text>{month}</Text>
                <Text>{date}</Text>
              </VStack>
            ))}
          </HStack>
        </ScrollView>
        <Text>Select time:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space="4" mt="4">
            {Times.map(time => (
              <Box
                py="1"
                px="6"
                background="brand.gray"
                borderRadius="full"
                key={`Time-${time}`}>
                <Text>{time}</Text>
              </Box>
            ))}
          </HStack>
        </ScrollView>
        <HStack justifyContent="space-between" mt="7" alignItems="center">
          <VStack>
            <Text fontSize={12}>Total Price</Text>
            <Text fontSize={20} color="brand.orange">
              IDR 150K
            </Text>
          </VStack>
          <Button width="200" borderRadius="full" background="brand.orange">
            Buy Now
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  gradientLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '52.5%',
    height: '100%',
  },
  gradientRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '52.5%',
    height: '100%',
  },
});

export default Ticket;
