import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../utils/constans';

const Empty = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>Have no data!</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
});
