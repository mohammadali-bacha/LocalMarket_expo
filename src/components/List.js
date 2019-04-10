import React, { useState } from 'react'
import { FlatList, Text } from 'react-native'
import ListItem from './ListItem';

export default class extends React.Component {

    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch(this.props.uri)
        .then(res => res.json())
        .then(data => {
          this.setState({ data })
        })
    }
    render() {
        return <FlatList
            style={{ zIndex: -1, ...this.props.style }}
            data={this.state.data}
            keyExtractor={(item, id) => id.toString()}
            renderItem={({ item }) => <ListItem {...item} />}
        />
    }
}