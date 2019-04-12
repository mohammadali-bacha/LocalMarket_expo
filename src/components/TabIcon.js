import React from 'react'
import Badge from 'react-native-icon-badge'
import { Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { primary } from '../../native-base-theme/variables/material';



class TabIcon extends React.Component {

    shouldComponentUpdate() {
        return true
    }

    render() {
        const { iconName } = this.props
        return (
          <Badge
            MainElement={
              <Ionicons name={iconName} size={30} color={this.props.focused ? primary : '#ccc'} />
            }
            BadgeElement={<Text style={{ color: 'white' }}>{this.props.qty}</Text>}
            IconBadgeStyle={{
              width: 15,
              height: 15,
              backgroundColor: 'red'
            }}
            Hidden={this.props.qty === 0 || iconName !== 'ios-basket'}
          />
        )
    }
}

const state = state => {
  return {
    qty: state.cart.products.length
  }
}
export default connect(state, {})(TabIcon)