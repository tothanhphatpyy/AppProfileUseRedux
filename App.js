import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InfoUser from './src/views/InfoUser'

import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const App = () => {
  return (
    <Provider store = { store }>
      {console.log('render')}
      <InfoUser />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})