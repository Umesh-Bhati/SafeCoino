import {StyleSheet} from 'react-native';
import { COLORS } from '../../../styles';


export default styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: COLORS.white,
      paddingHorizontal: 16,
      paddingVertical: 45,
    },
    praiseTxt: {
      color: COLORS.success,
      textAlign: 'center',
      marginTop: 128,
    },
    sucTxt: {
      color: 'black',
      textAlign: 'center',
      marginTop: 17,
      lineHeight: 25,
      fontSize: 14,
    },
    btnContainer: {
      backgroundColor: COLORS.success,
      position: 'absolute',
      bottom: 10,
      alignSelf: 'center',
    },
    btnTitleStyle: {
      color: COLORS.priTxt_Dark,
    },
  });