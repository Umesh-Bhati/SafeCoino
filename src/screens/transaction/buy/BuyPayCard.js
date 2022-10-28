import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {Btn, Header, InputText, PerformaInvoice} from '../../../components';
import Colors from '../../../themes/Colors';
import Fonts from '../../../themes/Fonts';

const BuyPayCard = ({navigation}) => {
  // States
  const [switchWltTitles, setSwitchWltTitles] = useState({
    wltBtn1: true,
    wltBtn2: false,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const inputRef = useRef(null);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let Timout;
    if (switchWltTitles.wltBtn2) {
      Timout = setInterval(() => setTimer(t => (t == 0 ? '00' : t - 1)), 1000);
    }
    return () => {
      clearInterval(Timout);
    };
  }, [switchWltTitles.wltBtn2]);

  const renderModal = () => {
    return (
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              flex: 0.5,
              backgroundColor: '#F7F8FA',
            }}>
            {/* InfoTag Section */}

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/images/InfoTag.png')}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                  position: 'absolute',
                  left: 19,
                }}
              />
              <Text>Select Your Bank</Text>
            </View>

            {/* all banks */}

            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderWidth: 0.5,
                borderColor: '#E5E5E8',
                justifyContent: 'center',
                marginHorizontal: 19,
              }}>
              <Text
                style={{
                  fontSize: 16,
                }}>
                6104-3377-2123-2123
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setIsModalVisible(false)}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            zIndex: -9999,
          }}
        />
      </Modal>
    );
  };

  const renderTxtInPayByBalance = (title, amount, customTxtStyle) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <Text
          style={{
            ...Fonts.light(),
            color: Colors.DEACTIVE_ICON_TEXT,
            fontWeight: '300',
          }}>
          {title}
        </Text>
        <Text
          style={{
            ...Fonts.medium(14),
            color: Colors.DARK,
            ...customTxtStyle,
          }}>
          {amount}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
      }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          backgroundColor: Colors.PRIMARY,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}>
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
          <Text style={styles.titleTxt}>Pay</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <Btn
              title2={'Pay by Card'}
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
              title2={'Pay by Balance'}
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

          {/* Via Bank */}
          {switchWltTitles.wltBtn1 ? (
            <View
              style={{
                width: '100%',
                marginTop: 20,
              }}>
              <Text style={styles.titleTxt}>Your Bank</Text>
              <InputText
                ref={inputRef}
                onChangeText={() => console.log(inputRef.current?._children)}
                imgSource={require('../../assets/images/common/Arrow.png')}
                placeholder={'12878437283-9874837'}
                onPress={() => setIsModalVisible(true)}
                customImgStyle={{
                  tintColor: 'black',
                  height: 15,
                  width: 10,
                }}
                customTouchableContainerStyle={{
                  borderWidth: 0,
                }}
              />
            </View>
          ) : (
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  backgroundColor: '#F7F8FA',
                  width: '100%',
                  borderRadius: 10,
                  padding: 8,
                }}>
                {renderTxtInPayByBalance('Account balance', '45,000,000')}
                {renderTxtInPayByBalance('The amount payable', '60,000,000')}
                {renderTxtInPayByBalance('Inventory deficit', '15,000,000', {
                  color: Colors.DANGER,
                })}
              </View>

              {/* Security code */}
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  marginTop: 28,
                }}>
                <Text
                  style={{
                    ...Fonts.light(14),
                    color: Colors.DEACTIVE_ICON_TEXT,
                    fontWeight: '300',
                    lineHeight: 15.4,
                    alignSelf: 'flex-start',
                    marginLeft: 20,
                    marginBottom: 15,
                  }}>
                  Security code
                </Text>
                <TextInput
                  style={{
                    width: '100%',
                    marginHorizontal: 16,
                    borderWidth: 0.5,
                    borderColor: Colors.BORDER_COLOR,
                    borderRadius: 5,
                    height: 48,
                    paddingHorizontal: 20,
                  }}
                  placeholder="SMS / Google authenticator"
                />
                {/* Send SMS / Send Mail */}

                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    paddingHorizontal: 26,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: Colors.WARNING,
                      ...Fonts.medium(16),
                    }}>
                    Send SMS
                  </Text>
                  <Text
                    style={{
                      color: Colors.WARNING,
                      ...Fonts.medium(16),
                    }}>
                    Send Mail
                  </Text>
                </View>
              </View>

              {/* StopWatch/ Timer */}

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                }}>
                <Image
                  source={require('../../assets/icons/StopWatch.png')}
                  style={{
                    resizeMode: 'contain',
                    height: 24,
                    width: 24,
                  }}
                />
                <Text
                  style={{
                    color: Colors.ERROR,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                  }}>
                  00:{timer}
                </Text>
              </View>
            </View>
          )}
        </View>

        {/* renderingModalComponent */}

        {renderModal()}
      </ScrollView>
      {switchWltTitles.wltBtn1 ? (
        <Btn
          title2={'Pay'}
          customStyle={{
            backgroundColor: Colors.SUCCESS,
            width: '100%',
            bottom: 10,
            alignSelf: 'center',
          }}
          btnTxt1Style={{color: Colors.WHITE}}
          onPressBtn1={() => navigation.navigate("TxnFinish")}
        />
      ) : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            marginBottom: 15
          }}>
          <Btn
            title2={'Payment'}
            customStyle={{
              opacity: 0.5,
              flex: 1,
              marginRight: 5
            }}
          />
          <Btn
            title2={'Add balance'}
            
            customStyle={{
              flex: 2,
              borderColor: Colors.WARNING,
              borderWidth: 1
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleTxt: {
    marginLeft: 17,
    marginBottom: 11,
  },
});

export default BuyPayCard;
