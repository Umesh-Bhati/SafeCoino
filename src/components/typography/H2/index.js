import {Text, StyleSheet} from 'react-native';
import React from 'react';

const H2 = ({children, style}) => {
  return <Text style={[styles.h2, {...style}]}  >{children}</Text>;
};

const styles = StyleSheet.create({
  h2: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default H2;
