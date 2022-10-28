import React from 'react';
import {StatusBar, Image} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { AuthNavigator } from './routes';
import { COLORS } from './styles';

const App = () => {
  return (
   <>
   <Image source={3} style={
     {
       width: 200,
       height: 300,
       resizeMode: 'contain'
     }
   } />
   </>
  );
};

export default App;
