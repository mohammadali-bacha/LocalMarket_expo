import React from 'react'
import { TextInput, Icon, View } from 'react-native'
import { Input } from 'react-native-elements'


export default class extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return <View style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderColor: '#000',
                paddingBottom: 10,
            }}>
            <TextInput
                style={{ flex: 1 }}
                autoCorrect={false}
                placeholder="Rechercher...."
            />
            <Icon
                name='alarm'
            />
        </View>
    }
}