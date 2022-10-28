import {Text, StyleSheet} from 'react-native';
import React from 'react';
import { COLORS } from '../../../styles';

const H3 = ({children, style}) => {
  return <Text style={[styles.h3, {...style}]}>{children}</Text>;
};

const styles = StyleSheet.create({
  h3: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 16,
    color: COLORS.secTxt_Light
  },
});

export default H3;
