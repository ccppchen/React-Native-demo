'use strict';
import React from 'react';
import {
  Text,
  View,
  TabBarIOS,
  ScrollView,
  WebView,
} from 'react-native';

import Util from '../util/util';

export default class TabBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectTab: 'home',
      lastTab: 'home',
    };
  }
  tab(newTabName) {
    let currentTab = this.state.selectTab;
    if (currentTab !== newTabName) {
      this.setState({
        lastTab: currentTab,
      });
    }
    this.setState({
      selectTab: newTabName,
    });
  }
  render() {
    return (
      <TabBarIOS style={{ flex: 1 }} tintColor="#6bb967">
        <TabBarIOS.Item
          title="支付宝"
          icon={require('image!alipay')}
          // systemIcon="history"
          selected={this.state.selectTab === 'home'}
          onPress={this.tab.bind(this, 'home')}
        >
        <View>
          <View style={{ flex: 1 }}>
            <WebView
              ref='webview'
              source={{ uri: 'https://www.baidu.com/' }}
              startInLoadingState
              scrollEnabled
              bounces
              style={{ height: Util.size.height, width: Util.size.width }}
            />
          </View>
        </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="微信"
          icon={require("image!wechat")}
          // systemIcon="contacts"
          selected={this.state.selectTab === 'market'}
          onPress={this.tab.bind(this, 'market')}
        >
          <ScrollView>
            <View>
              <Text>market</Text>
            </View>
          </ScrollView>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="QQ"
          badge="4"
          icon={require("image!qq")}
          // systemIcon="favorites"
          selected={this.state.selectTab === 'shoppingcart'}
          onPress={this.tab.bind(this, 'shoppingcart')}
        >
          <ScrollView>
            <View>
              <Text>shoppingcart</Text>
            </View>
          </ScrollView>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="mac"
          icon={require("image!mac")}
          // systemIcon="search"
          selected={this.state.selectTab === 'me'}
          onPress={this.tab.bind(this, 'me')}
        >
          <ScrollView>
            <View>
              <Text>me</Text>
            </View>
          </ScrollView>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
