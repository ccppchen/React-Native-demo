import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Modal,
  PushNotificationIOS,
} from 'react-native';

import Button from 'react-native-smart-button';
import Util from '../util/util';
const styles = StyleSheet.create({
  btn: {
    margin: 10,
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 3,
    borderWidth: 1 / Util.pixel,
    borderColor: 'red'
  },
})
export default class RNModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
  }
  componentWillMount(){
    PushNotificationIOS.setApplicationIconBadgeNumber(42);
    PushNotificationIOS.presentLocalNotification({
      alertBody: 'hello'
    })
  }
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.modalVisible}
          >
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,.5)' }}>
              <View style={{ height: 300, backgroundColor: 'blue', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                  <Text>Hello World</Text>

                </View>
                <Button
                  touchableType={'highlight'}
                  underlayColor={'#c90000'}
                  style={[ styles.btn ]}
                  textStyle={{fontSize: 18, color: 'white'}}
                  onPress={ () => {this.setState({modalVisible: false})} }>
                  隐藏modal
                </Button>
              </View>
            </View>
          </Modal>
          <Button
            touchableType={'highlight'}
            underlayColor={'#c90000'}
            style={[ styles.btn ]}
            textStyle={{fontSize: 18, color: 'white'}}
            onPress={ () => {this.setState({modalVisible: !this.state.modalVisible})} }>
            显示modal
          </Button>
        </View>
      </ScrollView>
    );
  }
}
