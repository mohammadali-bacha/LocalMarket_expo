import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native'
import QuantitySelector from 'react-native-numeric-input'
import { Icon } from 'native-base';
import { primary } from '../../native-base-theme/variables/material';
import { connect } from 'react-redux'
import { addProduct } from '../store/cart'

class Product extends Component {
  state = {
    value: 1
  }

  render() {
    const { item } = this.props
    return (
      <View style={{ height: '100%' }}>
        <View style={styles.header}>
          <Image
            // source={{
            //   uri: this.props.item.productor.image
            // }}
            style={{
              width: '100%',
              height: '100%'
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <Image style={styles.avatar} source={{ uri: item.type.image }} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{item.type.name} ({item.metrics})</Text>
            <Text style={styles.info}>{item.productor.name}</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne
              assum electram expetendis, omittam deseruisse consequuntur ius
              an,
            </Text>
            <QuantitySelector
              value={this.state.value}
              initValue={this.state.value}
              onChange={value => {
                  this.setState({ value })
              }}
              rounded
            />
          </View>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {
            this.props.setVisible(false)
            this.props.addProduct(item, this.state.value)
        }}>
            <Text style={{ color: 'white', marginRight: 10 }}>{(this.state.value * item.price).toFixed(2)} €</Text>
          <Icon name="ios-cart" style={{ color: 'white' }} />
        </TouchableOpacity>
      </View>
    )
  }
}

const stateToProps = state => {
    return {
        products: state.cart.products
    }
}
const actions = { addProduct }

export default connect(stateToProps, actions)(Product)

const styles = StyleSheet.create({
  header: {
    backgroundColor: primary,
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600'
  },
  body: {
    marginTop: 40,
    height: 400
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600'
  },
  info: {
    fontSize: 16,
    color: primary,
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexGrow: 1,
    position: 'absolute',
    bottom: 20,
    right: 20,
    paddingHorizontal: 15,
    borderRadius: 7,
    backgroundColor: primary
  }
})
