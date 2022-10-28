import { Text, StyleSheet} from 'react-native';
import React from 'react';
import { COLORS } from '../../../styles';

const H1 = ({children, style}) => {
  return <Text style={[styles.h1, {...style}]}>{children}</Text>;
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 28,
    color: COLORS.secTxt_Light,
    marginBottom: 3.5
  },
});

export default H1;
