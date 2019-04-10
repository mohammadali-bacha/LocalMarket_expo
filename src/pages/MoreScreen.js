import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import {
  // Header,
  Button,
  Container,
  Content,
  List,
  ListItem,
  Body,
  Left,
  Text,
  Icon
} from "native-base";
import { Actions } from "react-native-router-flux";
import Header from "../components/Header";
import Login from "../components/Login";

// export default class extends React.Component {
//   static navigationOptions = {
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Button
//         title="Go to Login"
//         onPress={() => this.props.navigation.navigate('Login')}
//       />
//     );
//   }
// }
export default class extends React.Component {
  static navigationOptions = {
  };
  render() {
    // const { navigate } = this.props.navigation;
    return (
<Login />
    );
  }
}

