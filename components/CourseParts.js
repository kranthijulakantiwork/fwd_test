import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Lesson from './Lesson';

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 18,
  },
  separator: {height: 1, backgroundColor: 'lightgray'},
  listContainer: {padding: 20, marginBottom: 30},
});

const CourseParts = (props) => {
  return (
    <>
      <Text style={styles.title}>{'Introduction To UX'}</Text>
      <View style={styles.separator} />
      <View style={styles.listContainer}>
        <FlatList
          data={props.lessons}
          renderItem={({item, index}) => (
            <Lesson item={item} arr={props.lessons} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
};

export default CourseParts;
