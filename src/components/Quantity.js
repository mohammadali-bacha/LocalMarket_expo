import React from 'react'
import { View } from 'react-native'
import { Item, Input, Button, Icon, Content, Container } from 'native-base'

export default class extends React.Component {

    state = {
        qty: 1
    }

    render() {
        return (
          <View style={{ flex: 1, flexDirection: 'row', width: '60%', marginTop: 160 }}>
            <Button danger icon rounded>
              <Icon name="arrow-forward" />
            </Button>
            <Container style={{ marginHorizontal: 7 }}>
              <Content>
                <Item rounded>
                    <Input keyboardType="numeric" textAlign="center" value={this.state.qty.toString()} />
                </Item>
              </Content>
            </Container>
            <Button success icon rounded>
              <Icon name="fa fa-plus" />
            </Button>
          </View>
        )
    }
}