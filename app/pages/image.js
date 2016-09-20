'use strict';
import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import Image from 'react-native-image-progress';
import ProgressCircle from 'react-native-progress/Circle';
import Swipeout from 'react-native-swipeout';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Util from '../util/util';

const swipeoutBtns = [
  {
    text: 'Button',
  },
];
let imgs = ['https://img.alicdn.com/tps/TB1NNC.LXXXXXcpXpXXXXXXXXXX-520-280.jpg',
	'https://aecpm.alicdn.com/simba/img/TB1QfXWMFXXXXXaXFXXSutbFXXX.jpg',
	'https://img.alicdn.com/tps/TB1yxYyLXXXXXXoXFXXXXXXXXXX-520-280.jpg',
	'https://img.alicdn.com/imgextra/i2/2108418347/TB2f3cStVXXXXbcXpXXXXXXXXXX_!!2108418347.jpg_q100.jpg',
	'https://img.alicdn.com/tps/TB1kmBqLpXXXXa.aXXXXXXXXXXX-520-280.jpg',
];
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: Util.size.width,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 150,
    width: Util.size.width,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    width: 60,
    height: 30,
    borderColor: '#0089ff',
    borderWidth: 1/Util.pixel,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  widthBtn: {
    width: 30,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
class MyImage extends Component {
  render() {
    return (
      <ScrollView>
        <MyImageClass imgs={imgs}></MyImageClass>
      </ScrollView>
      );
  }
}
// image
class MyImageClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: this.props.imgs,
      counts: 0,
    };
  }
  goPre() {
    let count = this.state.counts;
    count--;
    if (count >= 0) {
      this.setState({
        counts: count,
      });
    } else if (count === -1) {
      this.setState({
        counts: this.props.imgs.length - 1,
      });
    }
  }
  goNext() {
    let count = this.state.counts;
    count++;
    if (count < imgs.length) {
      this.setState({
        counts: count,
      });
    } else if (count === imgs.length) {
      this.setState({
        counts: 0,
      });
    }
  }
  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.image}>
          <Image
            style={styles.img}
            source={{ uri: this.state.imgs[this.state.counts] }}
            indicator={ProgressCircle}
            indicatorProps={{
              size: 30,
              borderWidth: 1 / Util.pixel,
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
            resizeMode="cover"
            defaultSpirce={require('image!lazy-default-img')}
          />
        </View>
        <View style={styles.btns}>
          <TouchableOpacity onPress={this.goPre.bind(this)}>
            <View style={styles.btn}>
              <Text>上一张</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.widthBtn}>
          <TouchableOpacity onPress={this.goNext.bind(this)}>
            <View style={styles.btn}>
              <Text>下一张</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Swipeout right={swipeoutBtns}>
            <View
              style={{
                flex: 1,
                height: 44,
                backgroundColor:
                'blue',
                width: 375,
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: '#fff' }}>Swipe me left</Text>
            </View>
          </Swipeout>
        </View>
        <View>
          <Swiper showsButtons>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </View>
      </View>
		);
  }
}

export default MyImage;
