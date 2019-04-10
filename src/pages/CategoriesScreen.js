import React from 'react'
import { View, Text } from 'react-native'
import { Container, Header, Body, Item, Input, Icon, Right, Button, Tabs, Tab, ScrollableTab } from 'native-base'
import List from '../components/List'

export default class extends React.Component {

  constructor() {
    super()

    this.state = {
      products: []
    }

    // fetch('localhost:8080/products')
    //   .then(res => res.json())
    //   .then(products => this.setState(products))
  }

  componentDidMount() {
    let products = []
    for (let id = 0; id < 100; id++) {
      const product = {
        id,
        name: 'Tomates ' + id,
        seller: 'La bonne pomme',
        price: 3.40,
        metrics: 'kg',
        quantity: 150,
        image: 'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg'
      }


      products.push(product)
    }
    this.setState({ products })
  }

  render() {
    return (
      <Container >
        <Header searchBar> 
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
            <List data={this.state.products} /> 
          </Tab>
          <Tab heading="Légumes" />
          <Tab heading="Fruits" />
          <Tab heading="Produits laitier" />
          <Tab heading="Viande" />
          <Tab heading="Autre" />
        </Tabs>
      </Container>
    );
  }
}