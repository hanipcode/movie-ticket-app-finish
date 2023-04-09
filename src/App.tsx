import React from 'react';
import {View, NativeBaseProvider, extendTheme, StatusBar} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screen/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  const theme = extendTheme({
    colors: {
      brand: {
        dark: '#1C1C27',
        orange: '#F27707',
        yellow: '#DCB940',
        gray: '#34353E',
        lightGray: '#ECEEF0',
        white: '#EAECED',
      },
    },
    components: {
      Heading: {
        baseStyle: {
          color: 'brand.white',
        },
      },
      Text: {
        baseStyle: {
          color: 'brand.white',
        },
      },
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor="#1C1C27" />
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={View} />
          <Stack.Screen name="Ticket" component={View} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
