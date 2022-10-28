import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, width} from '../../../styles';

const FormInput = ({
  placeholder,
  placeholderTextColor,
  keyboardType,
  icon,
  onPress,
  title,
} ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{title}</Text>
      <View style={styles.mainContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          secureTextEntry={icon}
          style={styles.textInput}
        />
        {icon && (
          <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <Image
              source={require('../../../assets/icons/Eye.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  mainContainer: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.border_Light,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  txt: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 16,
    marginLeft: 15,
    marginBottom: 15,
  },
  textInput: {flex: 5},
  touchable: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  img: {
    height: 24,
    width: 24,
  },
});

export default FormInput;
