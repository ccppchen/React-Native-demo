
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  InteractionManager,
  StatusBar,
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  itemLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
});
/**
音乐
**/
export default class ScrollBar extends Component {

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {

    });
  }

  render() {
    const { navigator } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar
            backgroundColor='#1a191f'
            barStyle='light-content'
            animated
            hidden={false}
          />
          <ScrollableTabView
            initialPage={0}
            scrollWithoutAnimation
            renderTabBar={() => <ScrollableTabBar
              underlineColor="#ce3d3a"
              activeTextColor='#fff'
              inactiveTextColor='rgba(255, 255, 255, 0.7)'
              underlineHeight={0}
              textStyle={{ fontSize: 15 }}
              tabStyle={{ paddingBottom: 0 }}
              backgroundColor='#ce3d3a'
              tabStyle={{ paddingLeft: 12, paddingRight: 12 }}
            />}
          >
            <View tabLabel='推荐' style={styles.itemLayout}>
              <Text>推荐板块</Text>
            </View>
            <View tabLabel='头条号' style={styles.itemLayout}>
              <Text>头条号板块</Text>
            </View>
            <View tabLabel='热点' style={styles.itemLayout}>
              <Text>热点板块</Text>
            </View>
            <View tabLabel='视频' style={styles.itemLayout}>
              <Text>视频板块</Text>
            </View>
            <View tabLabel='上海' style={styles.itemLayout}>
              <Text>上海板块</Text>
            </View>
            <View tabLabel='社会' style={styles.itemLayout}>
              <Text>社会板块</Text>
            </View>
            <View tabLabel='图片' style={styles.itemLayout}>
              <Text>图片板块</Text>
            </View>
            <View tabLabel='娱乐' style={styles.itemLayout}>
              <Text>娱乐板块</Text>
            </View>
            <View tabLabel='科技' style={styles.itemLayout}>
              <Text>科技板块</Text>
            </View>
            <View tabLabel='汽车' style={styles.itemLayout}>
              <Text>汽车板块</Text>
            </View>
          </ScrollableTabView>
        </View>
      </ScrollView>
    );
  }
}
