import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native';
import {COLORS, DATA} from '../../utils/constans';
import Empty from './components/Empty';
import FriendRequestItem from './components/FriendRequestItem';
import Header from './components/Header';

const Home = () => {
  const [data, setData] = useState(DATA);
  const onLoadMore = () => {
    setData([
      ...data,
      {
        id: `${Math.random(0, 10)}`,
        name: `New friend${Math.random()}`,
        time: '47w',
        image: require('../../assets/images/image1.jpg'),
      },
      {
        id: `${Math.random()}`,
        name: `New friend${Math.random()}`,
        time: '47w',
        image: require('../../assets/images/image2.jpg'),
      },
      {
        id: `${Math.random()}`,
        name: `New friend${Math.random()}`,
        time: '47w',
        image: require('../../assets/images/image3.jpg'),
      },
    ]);
  };
  useEffect(() => {}, []);

  const onDelete = id => {
    setData(data.filter(item => item.id !== id));
    ToastAndroid.show('Deleted successfully !', ToastAndroid.SHORT);
  };
  const renderItem = ({item}) => (
    <FriendRequestItem data={item} onDelete={onDelete} />
  );
  const footer = () => {
    return (
      <View>
        <ActivityIndicator size={35} color="green" />
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListEmptyComponent={Empty}
      ListHeaderComponent={Header}
      ListFooterComponent={footer}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      style={styles.flatlist}
      contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
      onEndReached={onLoadMore}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            setData(data);
          }}
        />
      }
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  flatlist: {
    backgroundColor: COLORS.white,
  },
});
