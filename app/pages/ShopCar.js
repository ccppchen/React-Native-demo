
import React, { Component } from 'react';
import Image from 'react-native-image-progress';
import ProgressCircle from 'react-native-progress/Circle';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';

import Util from '../util/util';
import GouWu from './GouWu';

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  item: {
    flex: 1,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 5,
    height: 100,
  },
  img: {
    flex: 1,
    backgroundColor: 'transparent',
    height: 100,
  },
  item_text: {
    backgroundColor: '#000',
    opacity: 0.7,
    color: '#fff',
    height: 25,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 74,
  },
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
    padding: 8,
    fontSize: 18,
  },
  list_item: {
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    borderWidth: 1,
    height: 30,
    borderRadius: 3,
    borderColor: '#ddd',
  },
  list_item_desc: {
    flex: 2,
    fontSize: 15,
  },
  list_item_price: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15,
  },
  clear: {
    marginTop: 10,
    backgroundColor: '#FFF',
    color: '#000',
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 24,
    height: 33,
    fontSize: 18,
    textAlign: 'center',
  },
});
let Model = [
  {
    id: '1',
    title: '佳沛新西兰进口猕猴桃',
    desc: '12个装',
    price: 99,
    url: 'http://vczero.github.io/ctrip/guo_1.jpg'
  },
  {
    id: '2',
    title: '墨西哥进口牛油果',
    desc: '6个装',
    price: 59,
    url: 'http://vczero.github.io/ctrip/guo_2.jpg'
  },
  {
    id: '3',
    title: '美国加州进口车厘子',
    desc: '1000g',
    price: 91.5,
    url: 'http://vczero.github.io/ctrip/guo_3.jpg'
  },
  {
    id: '4',
    title: '新疆特产西梅',
    desc: '1000g',
    price: 69,
    url: 'http://vczero.github.io/ctrip/guo_4.jpg'
  },
  {
    id: '5',
    title: '陕西大荔冬枣',
    desc: '2000g',
    price: 59.9,
    url: 'http://vczero.github.io/ctrip/guo_5.jpg'
  },
  {
    id: '6',
    title: '南非红心西柚',
    desc: '2500g',
    price: 29.9,
    url: 'http://vczero.github.io/ctrip/guo_6.jpg'
  }
];
export default class ShopCar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    AsyncStorage.getAllKeys((err, keys) => {
      if (err) {
        alert('错误', '购物车为空');
      }
      this.setState({
        count: keys.length,
      });
    });
  }
  goGouwu() {
    this.props.navigator.push({
      component: GouWu,
      title: '购物车',
    });
  }
  press(data) {
    let count = this.state.count;
    count++;
    this.setState({ count: count });
    AsyncStorage.setItem(`sp-${this.getId()}-sp`, JSON.stringify(data), function (err) {
      if (err) {
        alert('错误', '存储出错');
      }
    });
  }
  getId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 || 0x8);
      return v.toString(16);
    }).toUpperCase();
  }
  render() {
    let list = [];
    for (i in Model) {
      if (i % 2 === 0) {
        let row = (
          <View style={styles.row} key={i}>
            <Item
              url={Model[i].url}
              title={Model[i].title}
              press={() => this.press(Model[i])}>
						</Item>
            <Item
              url={Model[parseInt(i, 0) + 1].url}
              title={Model[parseInt(i, 0) + 1].title}
              press={this.press.bind(this, Model[parseInt(i, 0) + 1])}>
						</Item>
          </View>
        );
        list.push(row);
      }
    }

    let count = this.state.count;
    let str = null;
    if (count) {
      str = `, 共${count}件商品`;
    }
    return (
      <ScrollView style={{ marginTop: 10 }}>
        <View>
          {list}
          <View style={{ flex: 1, flexDirection: 'row', borderRadius: 3, marginTop: 35 }}>
            <TouchableHighlight style={styles.btnGroup} underlayColor="#ff0000" onPress={this.goGouwu.bind(this)}>
              <Text style={styles.btn}>去结算{str}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}

class Item extends Component {
  render() {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={this.props.press.bind(this)}>
          <Image
            resizeMode='stretch'
            style={styles.img}
            indicator={ProgressCircle}
            indicatorProps={{
              size: 30,
              borderWidth: 1 / Util.pixel,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}
            source={{ uri: this.props.url }}>
            <Text numberOfLines={1} style={styles.item_text}>
              {this.props.title}
            </Text>
          </Image>
        </TouchableOpacity>
      </View>
    );
  }
}
