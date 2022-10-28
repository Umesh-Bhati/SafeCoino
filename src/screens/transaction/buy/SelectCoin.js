import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../themes/Colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {fetchCoinData} from '../../../utils/Api';

//images
import Star from '../../assets/images/common/Star.svg';
import {FlatList} from 'react-native-gesture-handler';
import {Spinner} from '../../../components';

const Tab = createMaterialTopTabNavigator();
const SelectCoin = ({navigation}) => {
  const [coinData, setCoinData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [favList, setFavList] = useState([]);
  const [showSpiner, setShowSpiner] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [favColor, setFavColor] = useState(false);
  const [searchTxt, setSearchTxt] = useState('');

  const fetchCoinsData = async () => {
    setRefreshing(true)
    try {
      setCoinData(await fetchCoinData());
      setShowSpiner(false);
      setRefreshing(false);
    } catch (error) {
      console.warn(error);
      setShowSpiner(false);
      setRefreshing(false);
    }
  };

  const searchItems = searchValue => {
    setSearchTxt(searchValue);
    if (searchTxt !== '') {
      const filteredData = coinData.filter(item => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchTxt?.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(coinData);
    }
  };

  useEffect(() => {
    fetchCoinsData();
    return () => setCoinData([]);
  }, []);

  let renderCoinCard = (id, symbol, uri) => {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          height: 54,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          borderWidth: 0.5,
          borderColor: Colors.BORDER_COLOR,
          paddingHorizontal: 28,
        }}
        onPress={() => navigation.navigate('Home', {symbol, uri})}>
        <Image
          source={{uri}}
          style={{
            width: 25,
            height: 25,
          }}
        />
        <Text
          style={{
            marginLeft: 25,
            textTransform: 'uppercase',
          }}>
          {symbol}
        </Text>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            right: 28,
            position: 'absolute',
          }}
          onPress={() => {
            if (favList.length < 0) {
              setFavList(preState => [
                ...preState,
                ...coinData.filter(item => item.id == id),
              ]);
            } else if (favList.filter(item => item.id == id)[0]?.id == id) {
              setFavColor(!favColor);
            }
          }}>
          <Image
            source={require('../../assets/images/Star.png')}
            style={{
              tintColor:
                favList.filter(item => item.id == id)[0]?.id == id
                  ? 'yellow'
                  : null,
            }}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const All = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#F7F8FA',
        }}>
        <FlatList
          data={searchTxt.length > 1 ? filteredResults : coinData}
          renderItem={({item}) =>
            renderCoinCard(item.id, item.symbol, item.image)
          }
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => fetchCoinsData()}
            />
          }
          onEndReached={() => {fetchCoinsData(); }}
        />
      </View>
    );
  };
  const Recent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F7F8FA',
        }}>
        <Text>Hii this is All scenr</Text>
      </View>
    );
  };
  const Favorite = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#F7F8FA',
        }}>
        <FlatList
          data={favList}
          renderItem={({item}) =>
            renderCoinCard(item.id, item.symbol, item.image)
          }
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                fetchCoinsData();
                setRefreshing(false);
              }}
            />
          }
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.PRIMARY,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 48,
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: Colors.BORDER_COLOR,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 17,
          }}>
          <TextInput
            placeholder="Large Input"
            placeholderTextColor="black"
            value={searchTxt}
            onChangeText={txt => {
              searchItems(txt);
            }}
          />
          <Image source={require('../../assets/images/Search.png')} />
        </View>
      </View>
      <View
        style={{
          flex: 3,
        }}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {fontSize: 12, textTransform: 'capitalize'},
            tabBarStyle: {
              backgroundColor: '#F7F8FA',
              justifyContent: 'center',
              elevation: 0,
            },
            tabBarInactiveTintColor: '#495057',
            tabBarActiveTintColor: 'black',
            tabBarIndicatorStyle: {
              backgroundColor: 'black',
              borderRadius: 0.5,
            },
            tabBarBounces: true,
          }}>
          <Tab.Screen name="All" component={All} />
          <Tab.Screen name="Recent" component={Recent} />
          <Tab.Screen name="Favorite" component={Favorite} />
        </Tab.Navigator>
      </View>
      <Spinner visible={showSpiner} />
    </View>
  );
};

export default SelectCoin;
