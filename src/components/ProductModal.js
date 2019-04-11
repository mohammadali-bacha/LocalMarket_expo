import React from 'react'
import { Image } from 'react-native-elements'
import {
    Text,
    View,
    ImageBackground,
    ActivityIndicator
  } from 'react-native'
import Quantity from './Quantity';

export default class extends React.Component {

    state = {
        qty: 1
    }

    render() {
        return (
           <View >
                <View>
                    <ImageBackground
                        source={{ uri: this.props.item.productor.image }}
                        style={{
                        width: '100%',
                        height: 200,
                        flex: 1, 
                        justifyContent: "center",
                        alignItems: 'center',
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                    >
                        <Text style={{ fontSize: 40, marginTop: 100, fontWeight: '700', color: 'white'}}>{this.props.item.productor.name}</Text>
                    </ImageBackground>
                </View>
                <View style={{ flex: 1, flexGrow: 1, width: '100%', marginTop: 180, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={{ uri: this.props.item.type.image }}
                        style={{
                        width: 150,
                        height: 150,
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <View style={{ marginTop: 100, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Quantity />
                    </View>
                    <View>
                        <Text>{this.props.item.type.name}</Text>
                        <Text>Quantité : {this.state.qty} {this.props.item.type.metrics}</Text>
                        <Text>Total : {this.state.qty * this.props.item.price} €</Text>
                    </View>
                </View>
           </View>
        )
    }
}