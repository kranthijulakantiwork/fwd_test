import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import TopBar from './TopBar';

const styles = StyleSheet.create({});

const {width} = Dimensions.get('window');
const themeColor = '#2424E1';
const sampleText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const Scroll = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <Image
          source={require('./../assets/sample.png')}
          style={{width: width, height: width}}
          resizeMode={'cover'}
        />
        <Text style={{padding: 10}}>{sampleText.repeat(20)}</Text>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          width,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderColor: 'gray',
          borderTopWidth: 1,
        }}>
        <Image source={require('./../assets/left.png')} tintColor={'black'} />
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}>{'<    10/10     >'}</Text>
        </View>
        <Image source={require('./../assets/left.png')} tintColor={'black'} />
      </View>
    </View>
  );
};

export default Scroll;
