import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { toggleBooked } from "../redux/post.actions";

export const PostScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const postId = navigation.getParam("postId");

  const post = useSelector((state) =>
    state.post.allPosts.find((p) => p.id === postId)
  );
  const booked = useSelector((state) =>
    state.post.bookedPosts.some((item) => item.id === postId)
  );

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(post));
  }, [dispatch, post]);

  useEffect(() => {
    navigation.setParams({ toggleHandler });
  }, []);
  if (!post) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.center}>
        <Image style={styles.img} source={{ uri: post.img }} />
        <View style={styles.textWrap}>
          <Text>{post.text}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam("date");
  const booked = navigation.getParam("booked");
  const toggleHandler = navigation.getParam("toggleHandler");

  const iconName = booked ? "ios-star" : "ios-star-outline";
  return {
    headerTitle: "Post create at " + new Date(date).toLocaleDateString(),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Take photo" iconName={iconName} onPress={toggleHandler} />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
});
