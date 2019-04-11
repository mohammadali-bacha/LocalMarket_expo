import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { removeProduct } from '../store/cart';
export default class BasketScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.props.cart}
      </View>
    );
  }
}

// const mapStateToProps = state => {
//   cart: state
// }

// const mapDispatchToProps = dispatch => {
//   remove: id => dispatch(removeProduct(id))
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BasketScreen)