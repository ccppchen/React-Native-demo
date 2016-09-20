/**
 * Created by chenpeng on 16/8/27.
 */

import React from 'react';
import {
    AlertIOS,
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native';
import Util from '../util/util';

const styles = StyleSheet.create({
  item: {
    height: 30,
    padding: 6,
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1 / Util.pixel,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default class Alert extends React.Component {
  tip() {
    AlertIOS.alert('提示', '选择学习React Native', [
      {
        text: '取消',
        onPress: () => AlertIOS.alert('提示', '你点击了取消'),
      },
      {
        text: '确定',
        onPress: () => AlertIOS.alert('提示', '你点击了确定'),
      },
    ]);
  }
  prompt() {
    AlertIOS.prompt('提示', 'hello world', [
      {
        text: '取消',
        onPress: () => AlertIOS.alert('提示', '你点击了取消'),
      },
      {
        text: '确定',
        onPress: (e) => AlertIOS.alert('提示', e),
      },
    ]);
  }
  render() {
    return (
      <ScrollView>
        <TouchableOpacity onPress={this.tip}>
          <Text style={styles.item}>alert</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.prompt}>
          <Text style={styles.item}>prompt</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
