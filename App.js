import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import TopBar from './components/TopBar';
import CourseParts from './components/CourseParts';
import Scroll from './components/Scroll';
const {width} = Dimensions.get('window');
const themeColor = '#2424E1';

const styles = StyleSheet.create({
  scrollContainer: {flex: 1, backgroundColor: 'white'},
  scrollTopBack: {
    backgroundColor: themeColor,
    height: 10,
    width,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 5,
    width: 300,
    alignSelf: 'center',
    paddingVertical: 20,
    top: -10,
    zIndex: 5,
  },
  button: {
    backgroundColor: themeColor,
    width: '80%',
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonText: {color: 'white'},
});
const sampleText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const LESSONS = [
  {
    completed: true,
    title: 'blah blah 1',
  },
  {
    completed: true,
    title: 'blah blah 2',
  },
  {
    completed: true,
    title: 'blah blah 3',
  },
  {
    completed: false,
    title: 'blah blah 4',
    duration: '1 Min 11 sec',
  },
  {
    completed: false,
    title: 'blah blah 5',
    duration: '1 Min 11 sec',
    locked: true,
  },
  {
    completed: false,
    title: 'blah blah 6',
    duration: '1 Min 11 sec',
    locked: true,
  },
  {
    completed: false,
    title: 'blah blah 7',
    duration: '1 Min 11 sec',
    locked: true,
  },
];

const App = () => {
  const [screenChanged, changeScreen] = useState(false);
  return screenChanged ? (
    <Scroll />
  ) : (
    <>
      <TopBar />
      <ScrollView>
        <View style={styles.scrollTopBack} />
        <View style={styles.card}>
          <CourseParts lessons={LESSONS} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => changeScreen(true)}>
            <Text style={styles.buttonText}>Keep Learning</Text>
          </TouchableOpacity>
        </View>
        <Text>{sampleText}</Text>
      </ScrollView>
    </>
  );
};

export default App;
