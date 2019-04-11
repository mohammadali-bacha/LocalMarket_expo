import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Ionicons from "react-native-vector-icons/Ionicons";


import ListScreen from './src/pages/ListScreen'
import TrackScreen from './src/pages/TrackScreen'
import BasketScreen from './src/pages/BasketScreen'
import MoreScreen from './src/pages/MoreScreen'

const TabNavigator = createBottomTabNavigator(
  {
    Produits: ListScreen,
    Suivi: TrackScreen,
    Panier: BasketScreen,
    Plus: MoreScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Produits") {
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