import React from 'react';
import { View, Text, Button } from 'react-native'
import { inject, observer } from 'mobx-react'

const CounterView = ({store}) => (
    <View style={{height: '100%', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={() => store.counter.decrement()} title="-"/>
        <Text>{store.counter.count}</Text>
        <Button onPress={store.counter.increment} title="+"/>
    </View>
)

export default inject('store')(observer(CounterView))