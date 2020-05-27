import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { BookedScreen } from "../screens/BookedScreen";
import { THEME } from "../theme";
import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";

const defaultOpt = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
  },
};

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen,
    },
  },
  defaultOpt
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen,
  },

  defaultOpt
);

const BottomNavigator = createBottomTabNavigator(
  {
    Post: {
      screen: PostNavigator,
      navigationOptions: {
        tabBarIcon: (info) => (
          <Ionicons name="ios-albums" size={25} color={info.tintColor} />
        ),
      },
    },
    Booked: {
      screen: BookedNavigator,
      navigationOptions: {
        tabBarIcon: (info) => (
          <Ionicons name="ios-star" size={25} color={info.tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: THEME.MAIN_COLOR,
    },
  }
);

const CreateNavigator = createStackNavigator(
  {
    Create: CreateScreen
  },
  defaultOpt
)

const AboutNavigation = createStackNavigator(
  {
    About: AboutScreen,
  },
  defaultOpt
);

const CreateNavigation = createStackNavigator(
  {
    Create: CreateScreen,
  },
  defaultOpt
);

const MainNavigator = createDrawerNavigator(
  {
    PostTabs: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: 'Main'
      }
    },
    About: {
      screen: AboutNavigation,
      navigationOptions: {
        drawerLabel: 'About'
      }
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        drawerLabel: 'Create a new post'
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
    }
  }
)

export const AppNavigation = createAppContainer(MainNavigator);
