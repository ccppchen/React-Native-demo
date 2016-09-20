import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import Detail from './detail';

const styles = {
  flex: {
    flex: 1,
  },
  news_item: {
    height: 30,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    fontSize: 16,
  },
  news_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#cd1d1c',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    marginBottom: 10,
  },
};

export default class newsList extends React.Component {
  goTo(title) {
    this.props.navigator.push ({
      component: Detail,
      title: title,
      rightButtonTitle: '购物车',
      onRightButtonPress: () => alert('进入我的购物车'),
    });
  }
  render() {
  let news = [];
  for (let i in this.props.news) {
    let text = (
      <Text
        numberOfLines={1}
        onPress={() => this.goTo(this.props.news[i])}
        key={i}
        style={styles.news_item}
      >
        {this.props.news[i]}
      </Text>
    );
    news.push(text);
  }
    return (
      <View style={styles.flex}>
        <Text style={styles.news_title}>今日头条</Text>
        {news}
      </View>
    );
  }
}
