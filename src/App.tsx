import React from 'react';
import {View, NativeBaseProvider, extendTheme, StatusBar} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screen/Home';
import {RootParamList} from './constants';
import Detail from './screen/Detail';
import Ticket from './screen/Ticket';

const Stack = createNativeStackNavigator<RootParamList>();
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

type CustomTheme = typeof theme;
declare module 'native-base' {
  interface ICustomTheme extends CustomTheme {}
}

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor="#1C1C27" hidden />
        <Stack.Navigator
          screenOptions={{header: () => null, animation: 'fade_from_bottom'}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Ticket" component={Ticket} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
