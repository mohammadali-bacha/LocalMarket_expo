import React, { Component } from 'react'
import {
  Modal,
  Text,
  View,
  ImageBackground,
  ActivityIndicator
} from 'react-native'
import { Image } from 'react-native-elements'
import { Item, Input } from 'native-base'
import Quantity from './Quantity';

export default class extends Component {
  state = {
    modalVisible: false
  }

  setVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  render() {
    return (
      <Modal
        transparent={true}
        animationType="slide"
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setVisible(false)
        }}
      >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
          {this.props.children}
        </View>
      </View>
      </Modal>
    )
  }
}
