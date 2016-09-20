import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Util from '../util/util';

export default class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    Util.get('/rn/test', (data) => {
      this.setState({
        data: data.data,
      });
    })
  }
  render() {
    return (
      <ScrollView>
        <View>
          <Text>{ this.state.data }</Text>

        </View>
      </ScrollView>
    );
  }
}
