import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});
export default class Geolocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
  }
  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  render() {
    return (
      <ScrollView>
        <View>
          <Text>
            <Text style={styles.title}>Initial position: </Text>
            {this.state.initialPosition}
          </Text>
          <Text>
            <Text style={styles.title}>Current position: </Text>
            {this.state.lastPosition}
          </Text>
        </View>
      </ScrollView>
    );
  }
}
