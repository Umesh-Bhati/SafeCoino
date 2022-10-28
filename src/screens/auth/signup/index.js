import React from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import {AuthVisual, Btn, FormInput, Heading} from '../../../components';
import {subTitles, titles} from '../../../res/strings/en-EN';
import {COLORS} from '../../../styles';
import styles from './styles';

export default SignUp = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Heading title={titles.SIGNUP} subTitle={subTitles.SIGNUP} />
      <AuthVisual />
      <FormInput
        placeholder={'Phone number'}
        title={'Email or Phone number'}
        keyboardType="phone-pad"
      />
      <FormInput placeholder={'password'} icon={true} title={'Password'} />
      <FormInput placeholder={'password'} icon={true} title={'Re Password'} />
      <Btn
        title={'Signup'}
        customContainerStyle={{
          backgroundColor: COLORS.info,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate("SignUpSuccessful")}
      />
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: COLORS.secTxt_Dark,
          marginVertical: 30,
        }}
      />
      <Btn
        title={'Signup with your Google'}
        customContainerStyle={{
          borderWidth: 1,
          borderColor: COLORS.secTxt_Dark,
        }}
        titleStyle={{
          color: COLORS.secTxt_Light,
        }}
      />
    </ScrollView>
  );
};
