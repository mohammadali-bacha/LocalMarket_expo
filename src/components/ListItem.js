import React from 'react'
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'

export default ({ item, onPress }) => {
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <View
          style={{
            height: 60,
            marginHorizontal: 5,
            padding: 15,
            elevation: 2,
            backgroundColor: "white",
            flex: 1,
            flexDirection: "row"
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
          <View style={{ paddingLeft: 25, flex: 1, flexDirection: "row" }}>
            <View style={{ flexGrow: 1 }}>
              <Text style={{ fontWeight: "700" }}>{item.type.name}</Text>
              <Text style={{ fontSize: 10 }}>
                {item.quantity} {item.metrics} disponible
              </Text>
            </View>
            <View
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={{ fontWeight: "700", color: "green" }}>
                {item.price}€/{item.metrics}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
}