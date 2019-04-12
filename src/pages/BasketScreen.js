import React from 'react'
import { connect } from 'react-redux'
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button, Image, Body, Title, Right } from 'native-base'
import { TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import CartList from '../components/CartList';

class BasketScreen extends React.Component {

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Panier</Title>
          </Body>
          <Right style={{ flex: null }}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Recommended')}
            >
              <Icon name="settings" />
            </Button>
          </Right>
        </Header>
        <FlatList
          style={{ flex: 1, flexGrow: 1 }}
          data={this.props.products}
          keyExtractor={(item, id) => id.toString()}
          renderItem={({ item }) => (
            <CartList
              item={item.product}
              qty={item.qty}
              onPress={() => {}}
            />
          )}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    qty: state.cart.products.length,
    products: state.cart.products
  }
}

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(BasketScreen)