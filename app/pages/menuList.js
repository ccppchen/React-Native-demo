import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import MenuList from './widget/tab';
import Util from '../util/util';

const styles = StyleSheet.create ({
  flex: {
    flex: 1,
  },
});
export default class menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: null };
  }
  componentDidMount() {
    Util.get('/rn/menu', (data) => {
      this.setState({
        data: data,
      });
    });
  }
  onPress(val) {
    alert(val);
  }
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <MenuList data={this.state.data} tabSelected={0} nSelected={0} click={this.onPress}/>
        </View>
      </ScrollView>
    );
  }
}
