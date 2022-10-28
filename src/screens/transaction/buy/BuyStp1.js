import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  Btn,
  CheckMark,
  Header,
  InputText,
  PerformaInvoice,
  Warning,
} from '../../components';
import Colors from '../../themes/Colors';
import Clipboard from '@react-native-clipboard/clipboard';

const BuyStp1 = ({navigation}) => {
  // States
  const [check, setCheck] = useState(false);
  const [switchWltTitles, setSwitchWltTitles] = useState({
    wltBtn1: true,
    wltBtn2: false,
  });
  const [switchNtkTitles, setSwitchNtkTitles] = useState({
    ntkBtn1: false,
    ntkBtn2: true,
    ntkBtn3: false,
  });
  const [wltInputValue, setWltInputValue] = useState('');
  const [isWltCopied, setIsWltCopied] = useState(false);
  const [tagInputValue, setTagInputValue] = useState('');
  const [isTagCopied, setIsTagCopied] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: "18%",
        alignItems: 'center',
        flexGrow: 1,
      }}>
      {/* BuyOrSellHeader */}

      <Header buyOrSell={'Buy'} />

      {/* WarningMsg */}

      <Image
        source={require('../../assets/images/common/Warning.png')}
        style={{
          width: '100%',
          height: 50,
          resizeMode: 'stretch',
          marginTop: 20,
        }}
      />

      {/* PerformaInvoice */}

      <PerformaInvoice />

      {/* WalletBtnsComponent */}

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          marginTop: 20,
        }}>
        <Text style={styles.titleTxt}>Wallet</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <Btn
            expandBtn={false}
            title2={'External'}
            customStyle={{
              width: 170,
              height: 50,
              backgroundColor: switchWltTitles.wltBtn1
                ? Colors.SECONDARY
                : 'transparent',
            }}
            onPressBtn1={() =>
              setSwitchWltTitles({
                wltBtn1: true,
                wltBtn2: false,
              })
            }
            btnTxt1Style={{
              color: switchWltTitles.wltBtn1 ? 'white' : null,
            }}
          />
          <Btn
            expandBtn={false}
            title2={'Internal'}
            customStyle={{
              width: 170,
              height: 50,
              borderWidth: 1.5,
              backgroundColor: switchWltTitles.wltBtn2
                ? Colors.SECONDARY
                : 'transparent',
            }}
            btnTxt1Style={{
              color: switchWltTitles.wltBtn2 ? 'white' : null,
            }}
            onPressBtn1={() =>
              setSwitchWltTitles({
                wltBtn1: false,
                wltBtn2: true,
              })
            }
          />
        </View>
      </View>

      {/* NetworkComponent */}

      {switchWltTitles.wltBtn1 ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '100%',
            marginTop: 20,
          }}>
          <Text style={styles.titleTxt}>Network:</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              height: 48,
            }}>
            <Btn
              expandBtn={false}
              title2={'ETH'}
              customStyle={{
                marginTop: 0,
                width: 0,
                height: '100%',
                marginRight: 20,
                flex: 1,
                backgroundColor: switchNtkTitles.ntkBtn1
                  ? Colors.SECONDARY
                  : 'transparent',
              }}
              onPressBtn1={() =>
                setSwitchNtkTitles({
                  ntkBtn1: true,
                  ntkBtn2: false,
                  ntkBtn3: false,
                })
              }
              btnTxt1Style={{
                color: switchNtkTitles.ntkBtn1 ? 'white' : null,
              }}
            />
            <Btn
              expandBtn={false}
              title2={'BNB'}
              customStyle={{
                marginTop: 0,
                width: 0,
                height: '100%',
                marginRight: 20,
                flex: 1,
                borderWidth: 1.5,
                backgroundColor: switchNtkTitles.ntkBtn2
                  ? Colors.SECONDARY
                  : 'transparent',
              }}
              btnTxt1Style={{
                color: switchNtkTitles.ntkBtn2 ? 'white' : null,
              }}
              onPressBtn1={() =>
                setSwitchNtkTitles({
                  ntkBtn1: false,
                  ntkBtn2: true,
                  ntkBtn3: false,
                })
              }
            />
            <Btn
              expandBtn={false}
              title2={'BSC'}
              customStyle={{
                marginTop: 0,
                width: 0,
                height: '100%',
                flex: 1,
                borderWidth: 1.5,
                backgroundColor: switchNtkTitles.ntkBtn3
                  ? Colors.SECONDARY
                  : 'transparent',
              }}
              btnTxt1Style={{
                color: switchNtkTitles.ntkBtn3 ? 'white' : null,
              }}
              onPressBtn1={() =>
                setSwitchNtkTitles({
                  ntkBtn1: false,
                  ntkBtn2: false,
                  ntkBtn3: true,
                })
              }
            />
          </View>

          {/* WalletScaner */}

          <View
            style={{
              width: '100%',
              marginTop: 40,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.titleTxt}>Wallet</Text>
              <Image
                source={require('../../assets/images/common/Scanner.png')}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                  marginRight: 17,
                }}
              />
            </View>
            <InputText
              imgSource={
                isWltCopied
                  ? require('../../assets/images/Check.png')
                  : require('../../assets/images/common/Paste.png')
              }
              placeholder={'Wallet Addresh'}
              placeholderTextColor={'black'}
              value={wltInputValue}
              onChangeText={value => {
                setWltInputValue(value);
                setIsWltCopied(false);
              }}
              isCopied={isWltCopied}
              onPress={() => {
                Clipboard.setString(wltInputValue);
                setIsWltCopied(true);
              }}
            />
          </View>

          {/* Tag/Memo Code */}

          <View
            style={{
              width: '100%',
              marginTop: 40,
              marginBottom: 12,
              opacity: check ? 0.5 : 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.titleTxt}>Tag/memo code</Text>
            </View>
            <InputText
              imgSource={
                isTagCopied
                  ? require('../../assets/images/Check.png')
                  : require('../../assets/images/common/Paste.png')
              }
              placeholder={'Tag code'}
              editable={!check}
              disabled={check}
              value={tagInputValue}
              onChangeText={value => {
                setTagInputValue(value);
                setIsTagCopied(false);
              }}
              isCopied={isTagCopied}
              onPress={() => {
                Clipboard.setString(tagInputValue);
                setIsTagCopied(true);
              }}
            />
          </View>

          {/* my check icon */}
          <CheckMark check={check} onPress={() => setCheck(!check)} />
        </View>
      ) : (
        <></>
      )}

      {/* Btn */}

      <Btn
        title2={'Next'}
        customStyle={{
          width: '100%',
          marginTop: 18,
          backgroundColor: Colors.SUCCESS,
          position: 'absolute',
          bottom: 10
        }}
        btnTxt1Style={{
          color: 'white',
        }}
        onPressBtn1={() => navigation.navigate('BuyPayCard')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleTxt: {
    marginLeft: 17,
    marginBottom: 11,
  },
});

export default BuyStp1;
