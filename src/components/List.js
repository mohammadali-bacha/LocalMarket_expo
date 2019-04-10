import React from 'react'
import { FlatList, Text } from 'react-native'
import ListItem from './ListItem';

export default ({ data, style }) => {
    return <FlatList
        style={{ zIndex: -1, ...style }}
        data={data}
        keyExtractor={(item, id) => id.toString()}
        renderItem={({ item }) => <ListItem {...item} />}
    />
}