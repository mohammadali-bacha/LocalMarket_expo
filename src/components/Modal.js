import React, { Component } from 'react'
import {
  Modal,
  View,
} from 'react-native'

export default class extends Component {
  state = {
    modalVisible: false
  }

  setVisible(modalVisible) {
    console.log(modalVisible, this)
    this.setState({ modalVisible })
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
