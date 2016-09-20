import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ListView,
} from 'react-native';

export default class ListViewPage extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <ScrollView>
        <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={ (rowData) => <Text>{rowData}</Text> }/>
        </View>
      </ScrollView>
    );
  }
}
