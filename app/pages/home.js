import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    AppState,
    StatusBarIOS,
    NetInfo,
    ListView,
} from 'react-native';

import Util from '../util/util';
import Newlist from './newslist';
import Search from './widget/search';
import MyImage from './image';
import Detail from './detail';
import TabBar from './tab-bar';
import ScrollBar from './ScrollViewTab';
import ShopCar from './ShopCar';
import Alert from './Alert';
import ActionSheet from './ActionSheet';
import CameraRoll from './CameraRoll';
import Geolocation from './Geolocation';
import MenuList from './menuList';
import Fetch from './fetch';
import imgPickers from './image-picker';
import ModalBox from './modalbox';
import RNModal from './modal';
import ListViewPage from './ListView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
  },
  items: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
  },
  hairLineRight: {
    borderRightWidth: 1 / Util.pixel,
    borderColor: '#ffffff',
  },
  hairLineBottom: {
    borderBottomWidth: 1 / Util.pixel,
    borderColor: '#ffffff',
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    width: 100,
    textAlign: 'center',
  },
  center: {
    alignItems: 'center',
  },
  pinkColor: {
    backgroundColor: '#ff697a',
  },
  blueColor: {
    backgroundColor: '#3d98ff',
  },
  greenColor: {
    backgroundColor: '#44c522',
  },
  yellowColor: {
    backgroundColor: '#fc9720',
  },
  imgSize: {
    width: 50,
    height: 50,
  },
  touchBtn: {
    padding: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchText: {
    fontSize: 20,
    color: '#000',
  },
});

// console.log(AppState.currentState);
AppState.addEventListener('change', () => console.log('addEventListener'));
AppState.removeEventListener('change', () => console.log('removeEventListener'));
// console.log(StatusBarIOS._nativeModule)
StatusBarIOS._nativeModule.setStyle('light-content', true);
StatusBarIOS._nativeModule.setNetworkActivityIndicatorVisible(true);

console.log(NetInfo);
NetInfo.fetch().done((e) => console.log(e));
NetInfo.addEventListener('change', (e) => console.log(e));

setTimeout(() => StatusBarIOS._nativeModule.setNetworkActivityIndicatorVisible(false), 2000);

export default class home extends React.Component {
  show(text) {
    alert(text);
  }
  goTo(id) {
    switch (id) {
      case 'MyImage':
        this.props.navigator.push({
          title: 'MyImage',
          component: MyImage,
        });
        break;
      case 'TabBar':
        this.props.navigator.push({
          title: 'TabBar',
          component: TabBar,
        });
        break;
      case 'ScrollBar':
        this.props.navigator.push({
          title: 'ScrollBar',
          component: ScrollBar,
        });
        break;
      case 'ShopCar':
        this.props.navigator.push({
          title: '水果列表',
          component: ShopCar,
          passProps: {},
        });
        break;
      case 'Alert':
        this.props.navigator.push({
          title: 'AlertIOS',
          component: Alert,
        });
        break;
      case 'ActionSheet':
        this.props.navigator.push({
          title: 'ActionSheetIOS',
          component: ActionSheet,
        });
        break;
      case 'CameraRoll':
        this.props.navigator.push({
          title: 'CameraRoll',
          component: CameraRoll,
        });
      case 'Geolocation':
        this.props.navigator.push({
          title: 'Geolocation',
          component: Geolocation,
        });
      case 'MenuList':
        this.props.navigator.push({
          title: 'MenuList',
          component: MenuList,
        });
      case 'Fetch':
        this.props.navigator.push({
          title: 'fetch',
          component: Fetch,
        })
      case 'imgPickers':
        this.props.navigator.push({
          title: 'imgPickers',
          component: imgPickers,
        })
      case 'ModalBox':
        this.props.navigator.push({
          title: 'ModalBox',
          component: ModalBox,
        })
      case 'RNModal':
        this.props.navigator.push({
          title: 'RNModal',
          component: RNModal,
        })
      case 'ListViewPage':
        this.props.navigator.push({
          title: 'ListView',
          component: ListViewPage,
        })
      default:
        this.props.navigator.push({
          title: 'Detail',
          component: Detail,
        });
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Search />
          <View style={[styles.inner, styles.pinkColor]}>
            <View style={[styles.item, styles.hairLineRight, styles.center]}>
              <TouchableOpacity style={styles.items} onPress={() => this.goTo('imgPickers')}><Text numberOfLines={1} style={styles.textStyle}>imgPickers</Text><Image resizeMode="contain" source={require('image!jiudian')} style={{ width: 40, height: 40 }} /></TouchableOpacity>
            </View>
            <View style={[styles.item, styles.hairLineRight]}>
              <View style={[styles.item, styles.hairLineBottom, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo('CameraRoll')}>
                  <Text numberOfLines={1} style={styles.textStyle}>CameraRoll</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo('Geolocation')}>
                  <Text numberOfLines={1} style={styles.textStyle}>Geolocation</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item, styles.hairLineRight]}>
              <View style={[styles.item, styles.hairLineBottom, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo('MenuList')}>
                  <Text numberOfLines={1} style={styles.textStyle}>MenuList</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo('Fetch')}>
                  <Text numberOfLines={1} style={styles.textStyle}>Fetch</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.inner, styles.blueColor]}>
            <View style={[styles.item, styles.hairLineRight, styles.center]}>
              <TouchableOpacity style={styles.items} onPress={() => this.goTo('ModalBox')}>
                <Text numberOfLines={1} style={styles.textStyle}>ModalBox</Text>
                <Image resizeMode="contain" source={require('image!jipiao')} style={{ width: 40, height: 24 }} />
              </TouchableOpacity>

            </View>
            <View style={[styles.item, styles.hairLineRight]}>
              <View style={[styles.item, styles.hairLineBottom, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo('RNModal')}>
                  <Text numberOfLines={1} style={styles.textStyle}>RNModal</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo('ListViewPage')}>
                  <Text numberOfLines={1} style={styles.textStyle}>ListViewPage</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item, styles.hairLineRight]}>
              <View style={[styles.item, styles.hairLineBottom, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo()}>
                  <Text numberOfLines={1} style={styles.textStyle}>汽车票 船票</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo()}>
                  <Text numberOfLines={1} style={styles.textStyle}>专车 租车</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.inner, styles.greenColor]}>
            <View style={[styles.item, styles.hairLineRight, styles.center]}>
              <TouchableOpacity style={styles.items} onPress={() => this.goTo()}>
                <Text numberOfLines={1} style={styles.textStyle}>旅游</Text>
                <Image resizeMode="contain" source={require('image!lvyou')} style={{ width: 40, height: 40 }} />
              </TouchableOpacity>

            </View>
            <View style={[styles.item, styles.hairLineRight]}>
              <View style={[styles.item, styles.hairLineBottom, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo()}>
                  <Text numberOfLines={1} style={styles.textStyle}>目的地攻略</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo()}>
                  <Text numberOfLines={1} style={styles.textStyle}>周边游</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item, styles.hairLineRight]}>
              <View style={[styles.item, styles.hairLineBottom, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo()}>
                  <Text numberOfLines={1} style={styles.textStyle}>邮轮</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo()}>
                  <Text numberOfLines={1} style={styles.textStyle}>定制 包团</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.inner, styles.yellowColor]}>
            <View style={[styles.item, styles.hairLineRight]}>
              <View style={[styles.item, styles.hairLineBottom, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo()}>
                  <Text numberOfLines={1} style={styles.textStyle}>景点 玩乐</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo()}>
                  <Text numberOfLines={1} style={styles.textStyle}>礼品卡</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item, styles.hairLineRight]}>
              <View style={[styles.item, styles.hairLineBottom, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo()}>
                  <Text numberOfLines={1} style={styles.textStyle}>美食</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo()}>
                  <Text numberOfLines={1} style={styles.textStyle}>出境WiFi</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item, styles.hairLineRight]}>
              <View style={[styles.item, styles.hairLineBottom, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo()}>
                  <Text numberOfLines={1} style={styles.textStyle}>保险 签证</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo()}>
                  <Text numberOfLines={1} style={styles.textStyle}>保险 签证</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.inner, styles.yellowColor]}>
            <View style={[styles.item, styles.hairLineRight]}>
              <View style={[styles.item, styles.hairLineBottom, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo('MyImage')}>
                  <Text numberOfLines={1} style={styles.textStyle}>MyImage</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo('TabBar')}>
                  <Text numberOfLines={1} style={styles.textStyle}>TabBarIOS</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item, styles.hairLineRight]}>
              <View style={[styles.item, styles.hairLineBottom, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo('ScrollBar')}>
                  <Text numberOfLines={1} style={styles.textStyle}>scrollable-tab-view</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo('ShopCar')}>
                  <Text numberOfLines={1} style={styles.textStyle}>ShopCar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item, styles.hairLineRight]}>
              <View style={[styles.item, styles.hairLineBottom, styles.center]}>
                <TouchableOpacity style={styles.items} onPress={() => this.goTo('Alert')}>
                  <Text numberOfLines={1} style={styles.textStyle}>AlertIOS</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item, styles.center]}>
                <TouchableOpacity style={[styles.items, styles.center]} onPress={() => this.goTo('ActionSheet')}>
                  <Text numberOfLines={1} style={styles.textStyle}>ActionSheetIOS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Newlist navigator={this.props.navigator} news={['1、G20为什么对中国这么重要？习近平这样说', '2、巴西示威者大闹火炬传递 与警方发生激烈冲突', '3、小伙带48万虎骨入境 称给父母治风湿', '4、“限韩令”令四大韩娱公司暴跌3615亿，中企爸爸为其买单？', '5、周世锋被认定犯颠覆国家政权罪 判处有期徒刑7年。。。']} />

          <View>
            <View style={styles.touchBtn}>
              <TouchableHighlight
                onPress={() => this.show('TouchableHighlight')}
                underlayColor="#ff0000"
              >
                <Text style={styles.touchText}>React native TouchableHighlight</Text>
              </TouchableHighlight>

            </View>
            <View style={styles.touchBtn}>
              <TouchableOpacity onPress={() => this.show('TouchableOpacity')} >
                <Text style={styles.touchText}>React native TouchableOpacity</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
}
