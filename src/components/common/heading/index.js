import {View, Text} from 'react-native';
import React from 'react';
import {H1, H3} from '../../';

import {width} from '../../../styles';

const Heading = ({title, subTitle}) => {
  return (
    <View
      style={{
        width,
        padding: 16
      }}>
      <H1>{title}</H1>
      <H3>{subTitle}</H3>
    </View>
  );
};

export default Heading;
