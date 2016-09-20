import React, { Component } from 'react';
import Util from '../../util/util';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TextInput,
} from 'react-native';

const Search = React.createClass ({
    getInitialState: function(){
      return {
        show: false
      }
    },
    getValue: function(text){
      const value = text;
      this.setState({
        show: true,
        value: value
      })
    },
    hide: function(val){
      this.setState({
        show: false,
        value: val
      });
    },
    render: function() {
        return (
          <View>
        	  <View style={[styles.searchBox]}>
              <View style={styles.flex}>
                <TextInput
                  style={styles.input}
                  returnKeyType="search"
                  placeholder="请输入关键字"
                  value={this.state.value}
                  onChangeText={this.getValue}
                  // onEndEditing={this.hide.bind(this, this.state.value)}
                  clearButtonMode="while-editing" />
              </View>
              <View style={styles.btn}><Text style={styles.searchText}>搜索</Text></View>
            </View>
            { this.state.show ?
              <View style={styles.resultBox}>
                <View style={styles.item}><Text onPress={this.hide.bind(this, this.state.value + '庄')} numberOfLines={1}>{this.state.value}庄</Text></View>
                <View style={styles.item}><Text onPress={this.hide.bind(this, this.state.value + '元结')} numberOfLines={1}>{this.state.value}元结</Text></View>
                <View style={styles.item}><Text onPress={this.hide.bind(this, this.state.value + '综合商店')} numberOfLines={1}>{this.state.value}综合商店</Text></View>
                <View style={styles.item}><Text onPress={this.hide.bind(this, '综合商店' + this.state.value)} numberOfLines={1}>综合商店{this.state.value}</Text></View>
              </View>
              : null
            }
          
          </View>
        )
    }
});

const styles = {
  flex: {
    flex: 1,
  },
  searchBox: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderWidth: 1/Util.pixel,
    borderColor: '#23beff',
    borderRadius: 3,
  },
  input: {
    height: 30,
    padding: 6,
    fontSize: 14,
  },
  btn: {
    width: 50,
    height: 30,
    backgroundColor: '#23beff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    color: '#fff',
    fontSize: 16,
  },
  resultBox: {
    marginRight: 5,
    marginLeft: 5,
    height: 200,
  },
  item: {
    height: 44,
    justifyContent: 'center',
    borderBottomWidth: 1/Util.pixel,
    paddingLeft: 10,
    borderColor: '#eee'
  }

}

module.exports = Search;
