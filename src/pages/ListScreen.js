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
          style={{ backgroundColor: "#93BC3E" }}
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
        <Tabs
          renderTabBar={() => (
            <ScrollableTab
              // tabStyle={{ backgroundColor: "#a5cd39" }}
              // textStyle={{ color: "#fff" }}
              // activeTabStyle={{ backgroundColor: "#a5cd39" }}
              // activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
            />
          )}
        >
          <Tab
            tabStyle={{ backgroundColor: "#a5cd39" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#a5cd39" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
            heading="Tout"
          >
            <List uri="http://localhost:1337/product" />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#a5cd39" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#a5cd39" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
            heading="Légumes"
          >
            <List uri="http://localhost:1337/product" />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#a5cd39" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#a5cd39" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
            heading="Fruits"
          />
          <Tab
            tabStyle={{ backgroundColor: "#a5cd39" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#a5cd39" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
            heading="Produits laitier"
          />
          <Tab
            tabStyle={{ backgroundColor: "#a5cd39" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#a5cd39" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
            heading="Viande"
          />
          <Tab
            tabStyle={{ backgroundColor: "#a5cd39" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#a5cd39" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
            heading="Autre"
          />
        </Tabs>
      </Container>
    );
  }
}