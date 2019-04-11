import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
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
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import Header from '../components/Header'
import Login from '../components/Login'
import { connect } from 'react-redux'
import Modal from '../components/Modal'

class LoginScreen extends React.Component {
  static navigationOptions = {}

  modal = null
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <Modal
      ref={modal => this.modal = modal}
      >
        <Login />
      </Modal>
    )
  }

  componentWillReceiveProps(props){
    if (this.modal) {
      this.modal.setVisible(props.user == null)
    }
  }

}

function getState(state) {
  return { user: state }
}

function setState(state) {
  return {
    login: function(user) {
      return { type: 'LOGIN', user }
    }
  }
}

export default connect(
  getState,
  setState
)(LoginScreen)
