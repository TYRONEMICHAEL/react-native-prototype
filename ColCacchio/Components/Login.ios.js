'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width
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
    alignItems: 'stretch',
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: Image.resizeMode.contain,
    width: screenWidth
  },
  introContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 20
  },
  baseFont: {
    fontFamily: 'HelveticaNeue',
    color: 'rgba(255,255,255, 0.9)',
    fontSize: 18,
    fontWeight: '300'
  },
  link: {
    color: '#ff4a59'
  },
  borderTop: {
    borderTopColor: 'rgba(255,255,255, 0.7)',
    borderTopWidth: 1,
    marginTop: 10,
    paddingTop: 10
  },
  fontBold: {
    fontWeight: 'bold'
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
  button: {
    backgroundColor: '#ff4a59',
    width: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20
  },
  buttonText: {
    fontSize: 14
  },
  register: {
    marginTop: 10,
    paddingTop: 5,
    width: 230,
    textAlign: 'center'
  },
  registerText: {
    fontSize: 12,
    textAlign: 'center'
  }
});

var Login = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image source={require('image!bg-pizza')} style={styles.backgroundImage}>
          <View style={styles.introContainer}>
            <Text style={[styles.baseFont, styles.fontBold, styles.title]}>
              PIZZA MASTERS
            </Text>
            <Text style={[styles.baseFont, styles.title, styles.titleBottom]}>
              SINCE '92
            </Text>
            <View style={styles.borderTop}>
              <Text style={[styles.baseFont, styles.intro]}>
                Say hello to our <Text style={styles.fontBold}>Loyalty Program</Text> - the best and easiest way to receive
                <Text style={styles.fontBold}> delicious</Text> rewards at
                <Text style={styles.fontBold}> Col'Cacchio</Text> pizzeria.
              </Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableHighlight style={styles.button}>
              <Text style={[styles.baseFont, styles.fontBold, styles.buttonText]}>LOG IN</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.register}>
              <Text style={[styles.baseFont, styles.registerText]}>
                click here to <Text style={[styles.fontBold, styles.link]}>SIGN UP </Text>
                with your  social account or email address</Text>
            </TouchableHighlight>
          </View>
        </Image>
      </View>
    );
  }
});

module.exports = Login;
