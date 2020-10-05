import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';

const themeColor = '#2424E1';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: themeColor,
    height: 56,
    alignItems: 'center',
    justifyContent: 'space-between',
    width,
  },
  back: {marginLeft: 15, fontSize: 35, color: 'white'},
  title: {marginLeft: 15, fontSize: 24, color: 'white'},
});

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/left.png')} />
      <Text style={styles.title}>{'UX Fundamentals'}</Text>
      <View />
    </View>
  );
};

export default TopBar;
