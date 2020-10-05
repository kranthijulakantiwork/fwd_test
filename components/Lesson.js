import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

const size = 15;
const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  circleContainer: {alignItems: 'center'},
  lockContainer: {
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    height: size,
    width: size,
    borderRadius: size / 2,
  },
  circleCHeck: {
    height: size,
    width: size,
    borderRadius: size / 2,
    borderWidth: 1,
    backgroundColor: 'green',
  },
  circle: {
    height: size,
    width: size,
    borderRadius: size / 2,
    borderWidth: 1,
    borderColor: 'green',
  },
  line: {height: 55, width: 1, backgroundColor: 'green'},
  lessonDetailContainer: {marginLeft: 50},
});
const lock = require('./../assets/lock-outline.png');
const tick = require('./../assets/check.png');

const Lock = () => {
  return (
    <View style={styles.lockContainer}>
      <Image source={lock} />
    </View>
  );
};

const Circle = () => {
  return (
    <View style={styles.circleCHeck}>
      <Image source={tick} />
    </View>
  );
};

const CircleAndLine = ({index, arr, locked, completed}) => {
  return (
    <View style={styles.circleContainer}>
      {locked ? (
        <Lock />
      ) : completed ? (
        <Circle />
      ) : (
        <View style={styles.circle} />
      )}
      {index < arr.length - 1 ? <View style={styles.line} /> : null}
    </View>
  );
};
const Lesson = ({item, index, arr}) => {
  return (
    <View style={styles.container} key={index.toString()}>
      <CircleAndLine
        index={index}
        arr={arr}
        locked={item.locked}
        completed={item.completed}
      />
      <View style={styles.lessonDetailContainer}>
        <Text>{item.title}</Text>
        <Text>{item.completed ? 'Completed' : item.duration}</Text>
      </View>
    </View>
  );
};

export default Lesson;
