import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CounterView from './CounterView'
import { Provider } from 'mobx-react'
import RootStore from './RootStore'
import renderer from 'react-test-renderer';

const store = RootStore.create({})

const App = () => (
  <Provider store={store}>
    <CounterView />
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#4a8afa',
    fontSize: 30
  }
});

export default App