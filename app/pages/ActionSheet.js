/**
 * Created by chenpeng on 16/8/27.
 */
'use strict';

import React, { Component } from 'react';
import {
  View,
  AlertIOS,
  ActionSheetIOS,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import Util from  '../util/util';

export default class Alert extends React.Component{
  tip(){
    ActionSheetIOS.showActionSheetWithOptions({
      options: [
        '拨打电话',
        '发送邮件',
        '发送短信',
        '取消',
      ],
      cancelButtonIndex: 3, //取消按钮的下标
      destructiveButtonIndex: 0, //不能使用的按钮位置
    }, function (index) {
      AlertIOS.alert( '提示', index.toString(), [
        {
            text: '确定',
        },
      ] )
    })
    }
    share(){
      ActionSheetIOS.showShareActionSheetWithOptions({
        url: 'https://code.facebook.com',
      }, (err) => AlertIOS.alert('提示', err.toString()), (e) => AlertIOS.alert('提示', e.toString() ) )
    }
    render(){
      return (
        <ScrollView>
          <TouchableOpacity onPress={ this.tip }>
            <Text style={ styles.item }>showActionSheetWithOptions</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ this.share }>
            <Text style={ styles.item }>showShareActionSheetWithOptions</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  item: {
    height: 30,
    padding: 6,
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1/Util.pixel,
    marginLeft: 5,
    marginRight: 5,
  },
});
