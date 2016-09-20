var React = require('react-native');
var Dimensions = require('Dimensions');
var baseUrl = 'http://localhost:3000';
var {
  PixelRatio,
} = React;

var Util = {

  /* 单位像素 */
  pixel: PixelRatio.get(),
  /* 屏幕尺寸 */
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  /* post请求 */
  post: function (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch(baseUrl + url, fetchOptions)
    .then((response) => response.text())
    .then((responseText) => {
      callback(JSON.parse(responseText));
      // callback(responseText);
    }).done();
  },

  /* get请求 */
  get: function (url, callback) {
    fetch(baseUrl + url)
    .then((response) => response.text())
    .then((responseText) => {
      callback(JSON.parse(responseText));
      // callback(responseText);
    }).done();
  },

};

module.exports = Util;
