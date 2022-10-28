import React from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {AuthVisual, Btn, FormInput, H2, H3, Heading} from '../../../components';
import {subTitles, titles} from '../../../res/strings/en-EN';
import {COLORS} from '../../../styles';
import styles from './styles';

const ForgotPassword = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 8,
          width: 8,
          marginBottom: 28,
          marginLeft: 20,
        }}>
        <Image
          style={{
            flex: 1,
            tintColor: 'black',
            resizeMode: 'contain',
            transform: [{rotate: '270 deg'}],
          }}
          source={require('../../../assets/icons/Arrow.png')}
        />
      </TouchableOpacity>
      <Heading title={titles.LOGIN} subTitle={subTitles.LOGIN} />
      <AuthVisual />
      <FormInput
        placeholder={'Phone number'}
        title={'Email or Phone number'}
        keyboardType="phone-pad"
      />

      <Btn
        title={'Submit'}
        customContainerStyle={{
          backgroundColor: COLORS.info,
          position: 'absolute',
          bottom: 15,
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate('SignUpSuccessful')}
      />
    </ScrollView>
  );
};

export default ForgotPassword;
