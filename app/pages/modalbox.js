import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  ActivityIndicatorIOS,
  Platform,
} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-smart-button';
import ToolTip from 'react-native-tooltip';
import Util from '../util/util';
const styles = StyleSheet.create({

  wrapper: {
    paddingTop: 60,
    flex: 1,
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998",
  },

  modal3: {
    height: 300,
    width: 300,
  },

  modal4: {
    height: 300,
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent",
  },
  textinput: {
    width: 60,
    borderWidth: 1 / Util.pixel,
    borderRadius: 5,
    borderColor: '#c7c7cc',
    padding: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  btn: {
    margin: 10,
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 3,
    borderWidth: 1 / Util.pixel,
    borderColor: 'red'
  },
  text: {
    color: '#fff',
  },
});

export default class ModalBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      btn_1_isLoading: false,
      tipValue: 'tip'
    };
  }

  openModal() {
    this.refs.modal1.open();
  }
  openModal2() {
    this.refs.modal2.open();
  }
  openModal3() {
    this.refs.modal3.open();
  }
  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just openned');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }
  toggleDisable() {
    this.setState({isDisabled: !this.state.isDisabled});
  }

  toggleSwipeToClose() {
    this.setState({swipeToClose: !this.state.swipeToClose});
  }
  _renderActivityIndicator() {
    return (
    ActivityIndicator ? (<ActivityIndicator
      style={{margin: 10}}
      animating={true}
      color={'#fff'}
      size={'small'}/>) : Platform.OS == 'android' ? (<ProgressBarAndroid
      style={{margin: 10}}
      color={'#fff'}
      styleAttr={'Small'}/>):(<ActivityIndicatorIOS
      style={{margin: 10}}
      animating={true}
      color={'#fff'}
      size={'small'}/>)
  )}
  render() {
    return (
      // <ScrollView>
        <View style={[styles.wrapper]}>
          <Button
            touchableType={'highlight'}
            underlayColor={'#C90000'}
            style={[ styles.btn ]}
            textStyle={{fontSize: 18, color: 'white'}}
            onPress={this.openModal.bind(this)}>
            点我modal1 basic (背景高亮)
          </Button>

          <Button
            touchableType={'highlight'}
            underlayColor={'#c90000'}
            style={[ styles.btn ]}
            textStyle={{fontSize: 18, color: 'white'}}
            onPress={this.openModal2.bind(this)}>
            点我modal2 center (背景高亮)
          </Button>

          <Button
            touchableType={'highlight'}
            underlayColor={'#c90000'}
            style={[ styles.btn ]}
            textStyle={{fontSize: 18, color: 'white'}}
            onPress={this.openModal3.bind(this)}>
            点我modal3 bottom (背景高亮)
          </Button>

          <Button
            isLoading={this.state.btn_1_isLoading}
            touchableType={'opacity'}
            style={[ styles.btn ]}
            textStyle={{fontSize: 17, color: 'white'}}
            loadingComponent={
              this._renderActivityIndicator()
            }
            onPress={ () => {
              this.setState({
                btn_1_isLoading: true,
              })
              setTimeout( () => {
                this.setState({
                  btn_1_isLoading: false,
                })
              }, 3000)
            }}>
            loading (加载器)
          </Button>

          <ToolTip
            actions={[
              { text: 'x', onPress: () => this.setState({ tipValue: 'x press' }) },
              { text: 'y', onPress: () => this.setState({ tipValue: 'y press' }) }
            ]}
            underlayColor='transparent'
            longPress={true}
            arrowDirection='up'
            style={styles.textinput}>
            <Text>{ this.state.tipValue }</Text>
          </ToolTip>

          <Modal
            style={[styles.modal, styles.modal1]}
            ref={"modal1"}
            swipeToClose={this.state.swipeToClose}
            onClosed={this.onClose.bind(this)}
            onOpened={this.onOpen.bind(this)}
            onClosingState={this.onClosingState.bind(this)}
            position={"center"}>
            <Text style={styles.text}>Basic modal</Text>
            <TouchableOpacity onPress={this.toggleSwipeToClose.bind(this)}>
              <Text>Disable swipeToClose({this.state.swipeToClose ? "true" : "false"})</Text>
            </TouchableOpacity>
          </Modal>
          <Modal
            style={[styles.modal, styles.modal2]}
            ref={"modal2"}
            swipeToClose={this.state.swipeToClose}
            onClosed={this.onClose.bind(this)}
            onOpened={this.onOpen.bind(this)}
            onClosingState={this.onClosingState.bind(this)}
            position={"center"}>
            <Text style={styles.text}>modal2</Text>
            <TouchableOpacity onPress={this.toggleSwipeToClose.bind(this)}>
              <Text style={styles.text}>Disable swipeToClose({this.state.swipeToClose ? "true" : "false"})</Text>
            </TouchableOpacity>
          </Modal>
          <Modal
            style={[styles.modal, styles.modal2]}
            ref={"modal3"}
            swipeToClose={this.state.swipeToClose}
            onClosed={this.onClose.bind(this)}
            onOpened={this.onOpen.bind(this)}
            onClosingState={this.onClosingState.bind(this)}
            position={"bottom"}>
            <Text style={styles.text}>modal2 bottom</Text>
            <TouchableOpacity onPress={this.toggleSwipeToClose.bind(this)}>
              <Text style={styles.text}>Disable swipeToClose({this.state.swipeToClose ? "true" : "false"})</Text>
            </TouchableOpacity>
          </Modal>
        </View>
      // </ScrollView>
    );
  }

}
