import { ScrollView} from 'react-native';
import React from 'react';
import {AuthVisual, Btn, H1, H3, Heading} from '../../../components';
import {subTitles, titles} from '../../../res/strings/en-EN';
import styles from './styles';

const SignUpSuccessful = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Heading
        title={titles.SIGNUP_SUCCESS}
        subTitle={subTitles.SIGNUP_SUCCESS}
      />
      <AuthVisual />
      <H1 style={styles.praiseTxt}>Congratulations</H1>
      <H3 style={styles.sucTxt}>
        {'Your registration was successful\nLogin with your new account.'}
      </H3>
      <Btn
        title={'Login'}
        customContainerStyle={styles.btnContainer}
        titleStyle={styles.btnTitleStyle}
        onPress={() => navigation.navigate('Login') }
      />
    </ScrollView>
  );
};

export default SignUpSuccessful;


