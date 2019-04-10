import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Ionicons from "react-native-vector-icons/Ionicons";


import ListScreen from './src/pages/ListScreen'
import CategoriesScreen from './src/pages/CategoriesScreen'
import TrackScreen from './src/pages/TrackScreen'
import FavoritesScreen from './src/pages/FavoritesScreen'
import MoreScreen from './src/pages/MoreScreen'

const TabNavigator = createBottomTabNavigator(
  {
    Liste: ListScreen,
    Suivi: TrackScreen,
    Panier: MoreScreen,
    Plus: MoreScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Liste") {
          iconName = `ios-list${focused ? "" : ""}`;
        } else if (routeName === "Suivi") {
          iconName = `ios-pin${focused ? "" : ""}`;
        } else if (routeName === "Panier") {
          iconName = `ios-basket${focused ? "" : ""}`;
        } else if (routeName === "Plus") {
          iconName = `ios-more${focused ? "" : ""}`;
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);

export default createAppContainer(TabNavigator)