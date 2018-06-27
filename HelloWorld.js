import React, { Component } from 'react';
import { Text } from 'react-native';

export class HelloWorld extends Component {
    render() {
        return (
            <Text style={this.props.style}>{this.props.txt}</Text>
        );
    }
}
