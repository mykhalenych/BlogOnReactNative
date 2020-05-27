import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { PostList } from "../components/PostList";
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import {useSelector} from 'react-redux'

export const BookedScreen = ({navigation}) => {
  const openPostHandler = (post) => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    })
  }
  const bookedPosts = useSelector(state => state.post.bookedPosts)

  return (
    <PostList option={bookedPosts} onOpen={openPostHandler}/>
);
}

BookedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Booked',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo'
        iconName='ios-camera'
        onPress={() => navigation.push('Create')}
      />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle Drawer'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
})

