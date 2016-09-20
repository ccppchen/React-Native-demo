/**
 * 2016-08-30
 * 陈鹏
 */

import React, { Component } from 'react';
import Image from 'react-native-image-progress';
import ProgressCircle from 'react-native-progress/Circle';
import {
  ScrollView,
  StyleSheet,
  View,
  CameraRoll,
  TouchableOpacity,
  Text,
} from 'react-native';

import Util from '../util/util';
import Camera from './camera';

const imgUrl = 'http://vczero.github.io/lvtu/img/';
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  flex_1: {
    flex: 1,
  },
  imgHeight: {
    height: 120,
  },
  btn: {
    marginTop: 20,
    alignItems: 'center',
  },
  saveBnt: {
    fontSize: 18,
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#29bb9c',
  },
});

export default class cameraRoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
    };
  }
  componentDidMount() {
    CameraRoll.getPhotos({
      first: 4,
      groupTypes: 'All',
      assetType: 'Photos',
    }).then((data) => {
      const edges = data.edges;
      const photos = [];
      for (i in edges) {
        photos.push(edges[i].node.image.uri);
      }
      this.setState({ photos: photos });
    }, (data) => {
      alert(data);
    });
  }
  saveImg(...imgs) {
    for (i in imgs) {
      CameraRoll.saveToCameraRoll(imgUrl + imgs[i], 'photo').then(() => alert('success'), () => alert('faild'));
    }
  }
  goCamera() {
    this.props.navigator.push({
      title: '摄像头',
      component: Camera,
    })
  }
  render() {
    const photos = this.state.photos || [];
    const photoView = [];
    for (let i = 0; i < 4; i += 2) {
      photoView.push(
        <View style={[styles.wrap]} key={i}>
          <View style={[styles.flex_1, { paddingLeft: 0, paddingRight: 2 }]}>
            <Image
              resizeMode="stretch"
              style={[styles.imgHeight]}
              source={{ uri: photos[i] }}
              indicator={ProgressCircle}
              indicatorProps={{
                size: 30,
                borderWidth: 1 / Util.pixel,
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
            />
          </View>
          <View style={[styles.flex_1, { paddingLeft: 2, paddingRight: 0 }]}>
            <Image
              resizeMode="stretch"
              style={[styles.imgHeight]}
              source={{ uri: photos[parseInt(i, 10) + 1] }}
              indicator={ProgressCircle}
              indicatorProps={{
                size: 30,
                borderWidth: 1 / Util.pixel,
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
            />
          </View>
        </View>
      );
    }
    return (
      <ScrollView>
        <View style={[styles.wrap]}>
          <View style={[styles.flex_1, { paddingLeft: 0, paddingRight: 2 }]}>
            <Image
              resizeMode="stretch"
              style={[styles.imgHeight]}
              source={{ uri: `${imgUrl}city.jpg` }}
              indicator={ProgressCircle}
              indicatorProps={{
                size: 30,
                borderWidth: 1 / Util.pixel,
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
            />
          </View>
          <View style={[styles.flex_1, { paddingLeft: 2, paddingRight: 0 }]}>
            <Image
              resizeMode="stretch"
              style={[styles.imgHeight]}
              source={{ uri: `${imgUrl}3.jpeg` }}
              indicator={ProgressCircle}
              indicatorProps={{
                size: 30,
                borderWidth: 1 / Util.pixel,
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
            />
          </View>
        </View>
        <View style={[styles.btn]}>
          <TouchableOpacity onPress={() => this.saveImg('city.jpg', '3.jpeg')}>
            <Text style={[styles.saveBnt]}>保存图片</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.btn]}>
          <TouchableOpacity onPress={() => this.goCamera()}>
            <Text style={[styles.saveBnt]}>摄像头</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          {photoView}
        </View>
      </ScrollView>
    );
  }
}
