import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgotPassword, Login, SignUp, SignUpSuccessful, } from '../../screens';

const StackAuth = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <StackAuth.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        headerShown: false,
      }}>
      <StackAuth.Screen name="SignUp" component={SignUp} />
      <StackAuth.Screen name="SignUpSuccessful" component={SignUpSuccessful} />
      <StackAuth.Screen name="Login" component={Login} />
      <StackAuth.Screen name="ForgotPassword" component={ForgotPassword} />
    </StackAuth.Navigator>
  );
};

export default AuthNavigator;
