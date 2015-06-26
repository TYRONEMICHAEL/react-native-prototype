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
  introContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 20
  },
  title: {
    letterSpacing: -1,
    fontSize: 28
  },
  titleBottom: {
    marginTop: -10
  },
  buttonContainer:{
    height: 170,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  register: {
    marginTop: 10,
    paddingTop: 5,
    width: 230
  },
  registerText: {
    fontSize: 12,
    textAlign: 'center'
  }
});

var Login = React.createClass({
  render: function() {
    return (
      <View style={baseStyles.container}>
        <Image source={require('image!bg-pizza')} style={baseStyles.backgroundImage}>
          <View style={styles.introContainer}>
            <Text style={[baseStyles.baseFont, baseStyles.fontBold, styles.title]}>
              PIZZA MASTERS
            </Text>
            <Text style={[baseStyles.baseFont, styles.title, styles.titleBottom]}>
              SINCE '92
            </Text>
            <View style={baseStyles.borderTop}>
              <Text style={[baseStyles.baseFont, styles.intro]}>
                Say hello to our <Text style={baseStyles.fontBold}>Loyalty Program</Text> - the best and easiest way to receive
                <Text style={baseStyles.fontBold}> delicious</Text> rewards at
                <Text style={baseStyles.fontBold}> Col'Cacchio</Text> pizzeria.
              </Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableHighlight style={baseStyles.button}>
              <Text style={[baseStyles.baseFont, baseStyles.fontBold, baseStyles.buttonText]}>LOG IN</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.register}>
              <Text style={[baseStyles.baseFont, styles.registerText]}>
                click here to <Text style={[baseStyles.fontBold, baseStyles.link]}>SIGN UP </Text>
                with your  social account or email address</Text>
            </TouchableHighlight>
          </View>
        </Image>
      </View>
    );
  }
});

module.exports = Login;
