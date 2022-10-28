import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import H2 from '../../../typography/H2';
import {COLORS} from '../../../../styles';

const Btn = ({title, customContainerStyle, titleStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {...customContainerStyle}]}
      onPress={onPress}
      activeOpacity={0.8}>
      <H2 style={{color: COLORS.priTxt_Dark, ...titleStyle}}>{title}</H2>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
