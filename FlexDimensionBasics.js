import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 2, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
            <Button 
                onPress={() => 0}
                title="Button"
                backgroundColor="red"
            />
        </View>
        <View style={{flex: 2, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

