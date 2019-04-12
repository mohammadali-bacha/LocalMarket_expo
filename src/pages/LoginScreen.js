import React from 'react'
import Login from '../components/Login';
import { connect } from 'react-redux'
import { Modal } from 'react-native'
const LoginScreen = ({ user }) => {
    
    return (
      <Modal
        transparent={false}
        animationType="slide"
        visible={user === null}
        onRequestClose={() => {}}>
        <Login />
      </Modal>
    )
}

export default connect(state => {
    return {
      user: state.user
    }
})(LoginScreen)

