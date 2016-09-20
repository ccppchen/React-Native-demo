import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  AsyncStorage,
  TouchableHighlight,
  AlertIOS,
} from 'react-native';

import Util from '../util/util';

const styles = StyleSheet.create({
  btnGroup: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FF7200',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
  },
  btn: {
    color: '#fff',
    fontSize: 18,
  },
  list_item: {
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 3,
    borderWidth: 1 / Util.pixel,
    borderColor: "#ddd",
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  item_text: {
    fontSize: 14,
    color: '#000',
  },
})
export default class GouWu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      price: 0,
    };
  }
  componentDidMount() {
    AsyncStorage.getAllKeys((errs, keys) => {
      if (errs) { return }
      AsyncStorage.multiGet(keys, (errs, result) => {
        if (errs) { return }
        let arr = [];
        console.log(result);
        for (i in result) {
          arr.push(JSON.parse(result[i][1]))
        }
        this.setState({
          data: arr,
        });

      })

    })
  }
  clearStorage() {
    AsyncStorage.clear((err) => {
      AlertIOS.alert('提示', '是否清空？', [
        {
          text: '取消',
          onPress: () => AlertIOS.alert('提示', '你点击了取消'),
        },
        {
          text: '确定',
          onPress: () => {
            this.setState({
              data: [],
              price: 0,
            });
            AlertIOS.alert('提示', '清空成功')
          },
        },
      ]);
    })
  }
  render() {
    let data = this.state.data,
        price = this.state.price;
    let list = [];
    for (i in data) {
      price += parseFloat(data[i].price);
      list.push(
        <View style={[styles.list_item]} key={i}>
          <Text style={styles.item_text}>
            {data[i].title}
            {data[i].desc}
          </Text>
          <Text style={styles.item_text}>¥{data[i].price}</Text>
        </View>

      );
    }

    return (
      <ScrollView>
        {list}
        <View style={{ flex: 1, flexDirection: 'row', borderRadius: 3, marginTop: 10 }}>
          <TouchableHighlight style={styles.btnGroup} underlayColor="#ff0000" onPress={() => this.clearStorage()}>
            <Text style={styles.btn}>支付，共{price}元</Text>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', borderRadius: 3, marginTop: 10 }}>
          <TouchableHighlight style={styles.btnGroup} underlayColor="#ff0000" onPress={() => this.clearStorage()}>
            <Text style={styles.btn}>清空购物车</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}
