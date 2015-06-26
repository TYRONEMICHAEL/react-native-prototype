'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

var baseStyles = require('../Utils/Base.styles');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageTitle: {
    width: screenWidth
  },
  profileView: {
    flex: 1,
    alignItems: 'center',
    marginTop: -10
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 10
  },
  loyaltyStatus: {
    fontSize: 10
  }
});

var Dashboard = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image source={require('image!bg-wood')} style={baseStyles.backgroundImage}>
          <View style={baseStyles.pageTitle}>
            <Text style={[baseStyles.pageTitleText]}>
              <Text style={[baseStyles.fontBold]}>LOYALTY</Text> BOARD
            </Text>
          </View>
          <View style={[styles.profileView]}>
            <Image style={styles.profilePic} source={{uri: 'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/10455457_669429686858_2847018569617751382_n.jpg?oh=b69834bb8e23f040b7f153452297e96d&oe=5631FB54'}} />
            <Text style={[baseStyles.baseFont]}>
              <Text style={baseStyles.fontBold}>WELCOME</Text> TYRONE
            </Text>
            <Text style={[baseStyles.baseFont, styles.loyaltyStatus]}>
              Current loyalty status: <Text style={[baseStyles.fontBold, baseStyles.link]}>GOLD</Text>.
              Next level: <Text style={[baseStyles.fontBold, baseStyles.link]}>PLATINUM</Text>.
            </Text>

          </View>
        </Image>
      </View>
    );
  }
});

module.exports = Dashboard;