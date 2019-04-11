import React from 'react'
import { View, Text, Platform, ActivityIndicator } from 'react-native'
import { Container, Header, Item, Input, Icon, Right, Button, Tabs, Tab, ScrollableTab } from 'native-base'
import List from '../components/List'
import ProductModal from '../components/ProductModal'

export default class extends React.Component {

  state = {
    products: [],
    categories: []
  }

  modal = null

  componentDidMount() {
    fetch('http://192.168.1.69:1337/product')
      .then(res => res.json())
      .then(products => {
        this.setState({ products })
      })
    fetch('http://192.168.1.69:1337/category')
      .then(res => res.json())
      .then(categories => {
        this.setState({ categories })
      })
  }

  openModal(selected) {
    this.setState({ selected })
    this.modal.setVisible(true)
  }

  render() {
    return (
      <Container>
        <Header
          outerContainerStyles={{
            height: Platform.OS === "ios" ? 70 : 70 - 24
          }}
          searchBar
        >
          <Item rounded>
            <Input placeholder="Rechercher" />
            <Icon active name="search" />
          </Item>
          <Right style={{ flex: null }}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Recommended")}
            >
              <Icon name="settings" />
            </Button>
          </Right>
        </Header>
        {this.state.products.length === 0 && <ActivityIndicator />}
        {this.state.products.length !== 0 && (
          <Tabs renderTabBar={() => <ScrollableTab />}>
            <Tab heading="Tout">
              <List
                onPress={this.openModal.bind(this)}
                data={this.state.products}
              />
            </Tab>
            {this.state.categories.length !== 0 &&
              this.state.categories.map((category, key) => (
                <Tab key={key.toString()} heading={category.name}>
                  <List
                    onPress={this.openModal.bind(this)}
                    data={this.state.products}
                    filter={item => item.type.category === category.id}
                  />
                </Tab>
              ))}
          </Tabs>
        )}
        <ProductModal
          ref={m => (this.modal = m)}
          item={this.state.selected}
        />
      </Container>
    );
  }
}