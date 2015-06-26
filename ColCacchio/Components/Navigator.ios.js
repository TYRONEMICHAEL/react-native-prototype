'use strict';

var React = require('react-native');
var Dashboard = require('./Dashboard.ios');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

var Navigator = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute = {{
          component: Dashboard,
          title: 'Dashboard',
        }}
      />
    );
  }
});



module.exports = Navigator;
