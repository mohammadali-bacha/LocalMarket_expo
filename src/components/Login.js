import React, { Component } from "react";
import { View, Image } from 'react-native'
import { Item, Input, Button, Text } from 'native-base'
import { primary } from "../../native-base-theme/variables/material";
import { connect } from "react-redux";
import { login } from '../store/user'
// import { Alert, Button, TextInput, View, StyleSheet } from "react-native";

// export default class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       password: ""
//     };
//   }

//   onLogin() {
//     const { username, password } = this.state;

//     Alert.alert("Credentials", `${username} + ${password}`);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           value={this.state.username}
//           onChangeText={username => this.setState({ username })}
//           placeholder={"Username"}
//           style={styles.input}
//         />
//         <TextInput
//           value={this.state.password}
//           onChangeText={password => this.setState({ password })}
//           placeholder={"Password"}
//           secureTextEntry={true}
//           style={styles.input}
//         />

//         <Button
//           title={"Login"}
//           style={styles.input}
//           onPress={this.onLogin.bind(this)}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#ecf0f1"
//   },
//   input: {
//     width: 200,
//     height: 44,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "black",
//     marginBottom: 10
//   }
// });

class Login extends React.Component {

  state = {
    username: '',
    password: '',
  }

  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Image
          style={styles.logo}
          source={{
            uri:
              'https://github.com/mohammadali-bacha/LocalMarket_expo/blob/master/assets/icon.png?raw=true'
          }}
        />
        <View style={{ width: '80%' }}>
          <Item rounded style={styles.input}>
            <Input
              placeholder="Identifiant"
              onChange={username => this.setState({ username })}
              value={this.state.username}
            />
          </Item>
          <Item rounded style={styles.input}>
            <Input
              secureTextEntry={true}
              placeholder="Mot de passe"
              onChange={password => this.setState({ password })}
              value={this.state.password}
            />
          </Item>
          <Button
            full
            rounded
            style={styles.btn}
            onPress={() =>
              this.props.login({
                username: this.state.username,
                password: this.state.password
              })
            }
          >
            <Text>Connexion</Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = {
  input: {
    marginBottom: 15
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40
  },
  btn: {
    marginTop: 15,
    backgroundColor: primary
  }
}

export default connect(state => {
  return {
    user: state.user
  }
}, { login })(Login)
