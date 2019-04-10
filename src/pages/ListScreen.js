import React from 'react'
import { View, Text, Platform } from 'react-native'
import { Container, Header, Body, Item, Input, Icon, Right, Button, Tabs, Tab, ScrollableTab } from 'native-base'
import List from '../components/List'

export default class extends React.Component {

  constructor() {
    super()

    this.state = {
      products: []
    }

    
  }

  render() {
    return (
      <Container>
        <Header 
        outerContainerStyles={{height: Platform.OS === 'ios' ? 70 :  70 - 24}}
        searchBar> 
          <Item rounded>
            <Input placeholder='Rechercher' />
            <Icon active name='search' />
          </Item>
          <Right style={{ flex: null }}>
            <Button transparent onPress={() => this.props.navigation.navigate('Recommended')}>
              <Icon name="settings" />
            </Button>
          </Right>
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Tout">
            <List uri="http://192.168.43.25:1337/product" /> 
          </Tab>
          <Tab heading="Légumes">
            <List uri="http://192.168.43.25:1337/product" /> 
          </Tab>
          <Tab heading="Fruits" />
          <Tab heading="Produits laitier" />
          <Tab heading="Viande" />
          <Tab heading="Autre" />
        </Tabs>
      </Container>
    );
  }
}