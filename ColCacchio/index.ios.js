'use strict';

var React = require('react-native');
var Login = require('./Components/Login.ios');
var Dashboard = require('./Components/Dashboard.ios');

var {
  AppRegistry,
  StyleSheet,
  Navigator
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
});

var ColCacchio = React.createClass({
  renderScene: function(route, nav) {
    switch (route.id) {
      case 'login':
        return <Login />;
      default:
        return <Dashboard />;
    }
  },

  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ id: 'login' }}
        renderScene={this.renderScene}
      />
    );
  }
});



AppRegistry.registerComponent('ColCacchio', () => ColCacchio);
