import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../utils/constans';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={[styles.titleHeader]}>Friends</Text>
        <Icon
          name="search"
          size={30}
          color={COLORS.black}
          style={styles.iconBtn}
        />
      </View>
      <View style={styles.btnControl}>
        <TouchableOpacity style={styles.btnHeader}>
          <Text style={styles.textBtn}>Suggestionas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnHeader}>
          <Text style={styles.textBtn}>Your friends</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.title}>Friend requests</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.black,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnControl: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  btnHeader: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: COLORS.bgDisable,
    borderRadius: 20,
  },
  textBtn: {
    color: COLORS.black,
    fontWeight: '600',
    fontSize: 16,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.blackLess,
    paddingTop: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.black,
  },
  seeAll: {
    color: COLORS.bgPrimary,
  },
  iconBtn: {
    backgroundColor: COLORS.bgDisable,
    padding: 4,
    borderRadius: 20,
  },
});
