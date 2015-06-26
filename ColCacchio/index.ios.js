'use strict';

var React = require('react-native');
var Login = require('./Components/Login.ios');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
});

var ColCacchio = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style = {styles.container}
        navigationBarHidden = {true}
        initialRoute = {{
          component: Login,
          title: 'Login'
        }}
      />
    );
  }
});



AppRegistry.registerComponent('ColCacchio', () => ColCacchio);
