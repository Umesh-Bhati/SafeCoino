import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {AuthVisual, Btn, FormInput, H2, H3, Heading} from '../../../components';
import {subTitles, titles} from '../../../res/strings/en-EN';
import {COLORS} from '../../../styles';
import styles from './styles';

const Login = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Heading title={titles.LOGIN} subTitle={subTitles.LOGIN} />
      <AuthVisual />
      <FormInput
        placeholder={'Phone number'}
        title={'Email or Phone number'}
        keyboardType="phone-pad"
      />
      <FormInput placeholder={'password'} icon={true} title={'Password'} />
      <TouchableOpacity 
      onPress={()=>navigation.navigate('ForgotPassword')} >
        <H2 style={{fontSize: 12, color: COLORS.warning, marginVertical: 15}}>
          {titles.FORGOT_PASSWORD}
        </H2>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <H3>Do not have an account {' '}</H3>
        <TouchableOpacity>
          <H3 style={{color: COLORS.warning, marginVertical: 15}}>
            {titles.SIGNUP}
          </H3>
        </TouchableOpacity>
      </View>
      <Btn
        title={'Login'}
        customContainerStyle={{
          backgroundColor: COLORS.info,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('SignUpSuccessful')}
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
        title={'Login with your Google'}
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

export default Login;
