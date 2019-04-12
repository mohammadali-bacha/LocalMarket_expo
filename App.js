import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Badge from 'react-native-icon-badge'

import { Provider } from 'react-redux'

import store from './src/store'

import ListScreen from './src/pages/ListScreen'
import TrackScreen from './src/pages/TrackScreen'
import BasketScreen from './src/pages/BasketScreen'
import MoreScreen from './src/pages/MoreScreen'
import { createReduxContainer } from 'react-navigation-redux-helpers'
import { StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'
import material, { primary, secondary } from './native-base-theme/variables/material'
import TabIcon from './src/components/TabIcon';
import { connect } from 'react-redux'
import LoginScreen from './src/pages/LoginScreen';
import { Font, AppLoading } from "expo";

import NavigationService from './src/services/NavigationService'



const TabNavigator = createBottomTabNavigator(
  {
    Produits: ListScreen,
    Suivi: TrackScreen,
    Panier: BasketScreen,
    Plus: MoreScreen
  },
  {
    tabBarOptions: {
      activeTintColor: '#888'
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Produits') {
          iconName = `ios-list${focused ? '' : ''}`
        } else if (routeName === 'Suivi') {
          iconName = `ios-pin${focused ? '' : ''}`
        } else if (routeName === 'Panier') {
          iconName = `ios-basket${focused ? '' : ''}`
        } else if (routeName === 'Plus') {
          iconName = `ios-more${focused ? '' : ''}`
        }
        // You can return any component that you like here!
        return (
          <TabIcon iconName={iconName} routeName={routeName} focused={focused} />
        )
      }
    })
  }
)

const App = connect()(createAppContainer(TabNavigator))



export default class extends React.Component {

  state = {
    loading: true
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }


  render() {
    if (this.state.loading) {
      return <ActivityIndicator />
    }else {
      return (
        <StyleProvider style={getTheme(material)}>
            <Provider store={store}>
              <App 
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}
              />
              <LoginScreen />
            </Provider>
          </StyleProvider>
      )
    }
    
  }
}
