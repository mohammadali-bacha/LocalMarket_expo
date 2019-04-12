import React from 'react'
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'
import { primary, secondary } from '../../native-base-theme/variables/material'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { removeProduct } from '../store/cart'

const CartList = ({ item, qty, onPress, removeProduct }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View
        style={{
          height: 60,
          marginHorizontal: 5,
          padding: 15,
          elevation: 2,
          backgroundColor: 'white',
          flex: 1,
          flexDirection: 'row'
        }}
      >
        <Image
          source={{ uri: item.type.image }}
          style={{
            width: 30,
            height: 30,
            borderWidth: 2,
            borderColor: 2
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={{ paddingLeft: 25, flex: 1, flexDirection: 'row' }}>
          <View style={{ flexGrow: 1 }}>
            <Text style={{ fontWeight: '700' }}>{item.type.name}</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ width: 100 }}>
                <Text style={{ fontSize: 10 }}>
                  Quantité {qty}
                </Text>
              </View>
              <View style={{ width: 100 }}>
                <Text style={{ fontSize: 10 }}>
                  Prix / {item.metrics} {item.price.toFixed(2)} €
                </Text>
              </View>
              
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: '700', color: 'green' }}>
              {(item.price * qty).toFixed(2)} €
            </Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
            <Ionicons name='ios-trash' size={20} color="#777" onPress={() => removeProduct(item.id)}/>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default connect(
    state => ({}),
    { removeProduct }
)(CartList)