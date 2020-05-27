import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import {Post} from './Post'

export const PostList = ({option, onOpen}) => {
  if (!option.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.noItems}>There are not posts</Text>
      </View>
    )
  }
  return (
    <View style={styles.wrap}>
    <FlatList
      data={option}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Post post={item} onOpen={onOpen}/>}
    />
    <Text>MainScreen</Text>
  </View>
  )
} 

const styles = StyleSheet.create({
  wrap: {
    padding: 20,
  },
  wrapper: {
    padding: 10
  },
  noItems: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18
  }
})