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
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setVisible(false)
        }}
      >
        {this.props.item && (
          <View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <ImageBackground
                source={{ uri: this.props.item.productor.image }}
                style={{
                  width: '100%',
                  height: 200,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 30,
                    fontWeight: '700',
                    marginTop: 100
                  }}
                >
                  {this.props.item.productor.name}
                </Text>
              </ImageBackground>
            </View>
            <View
              style={{
                marginTop: 220,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <Image
                source={{ uri: this.props.item.type.image }}
                style={{
                  width: 120,
                  height: 120,
                  borderWidth: 2,
                  borderColor: 2
                }}
                PlaceholderContent={<ActivityIndicator />}
              />
              <Quantity />
            </View>
          </View>
        )}
      </Modal>
    )
  }
}
