import React from 'react'
import { connect } from 'react-redux'
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button, Image, Body, Title, Right } from 'native-base'
import { TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import CartList from '../components/CartList';
import { primary } from '../../native-base-theme/variables/material';
import { clearCart } from '../store/cart'
import Navigation from '../services/NavigationService'

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
        <View>
        {
          this.props.price.length > 0 && (
            <Button full rounded style={styles.btn} onPress={() => {
              this.props.clearCart()
              this.props.navigation.navigate('Suivi')
            }}>
              <Text>{this.props.price.reduce((a, b) => a + b).toFixed(2)} €</Text>
              <Icon name="ios-cart"/>
            </Button>
          )
        }
        </View>
      </Container>
    )
  }
}

const styles = {
  btn: {
    position: 'absolute',
    bottom: 30,
    right: 5,
    backgroundColor: primary
  }
}

const mapStateToProps = state => {
  return {
    qty: state.cart.products.length,
    products: state.cart.products,
    price: state.cart.products.map(item => item.product.price * item.qty)
  }
}

const mapDispatchToProps = { 
  clearCart
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketScreen)