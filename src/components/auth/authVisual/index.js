import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { height, width } from '../../../styles'

const AuthVisual = () => {
  return (
    <View style={styles.container} >
      <Image style={styles.visualImg} source={require('../../../assets/images/auth/LapyMoney.png')} />
    </View>
  )
}

export default AuthVisual

const styles = StyleSheet.create({
    container: {
        width,
        height: height/3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    visualImg: {
        flex:1,
        resizeMode: 'contain',
    }
})