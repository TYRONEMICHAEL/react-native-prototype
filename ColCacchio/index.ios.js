'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var ColCacchio = React.createClass({
  render: function() {
    return (
      <View source={require('image!bg-pizza')} style={styles.container}>
        <Image source={require('image!bg-pizza')} style={styles.imageContainer}>
          <View style={styles.introContainer}>
            <Text style={styles.textTop}>
              PIZZA MASTERS
            </Text>
            <Text style={styles.textBottom}>
              SINCE '92
            </Text>
            <View style={{borderTopColor: 'rgba(255,255,255, 0.8)', borderTopWidth: 1, margin: 20, marginTop: 0}}>
              <Text style={styles.intro}>
                Say hello to our <Text style={{fontWeight: 'bold'}}>Loyalty Program</Text> - the best and easiest way to receive
                <Text style={{fontWeight: 'bold'}}> delicious</Text> rewards at
                <Text style={{fontWeight: 'bold'}}> Col'Cacchio</Text> pizzeria.
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.register}>
                <Text style={styles.registerText}>click here to <Text style={{fontWeight: 'bold', color: '#ff4a59'}}>SIGN UP</Text> with your  social account</Text>
            </TouchableHighlight>
          </View>
        </Image>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  imageContainer: {
    flex: 2,

    resizeMode: Image.resizeMode.contain
  },
  introContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  buttonContainer:{
    height: 150,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textTop: {
    fontSize: 28,
    margin: 0,
    color: '#fff',
    fontFamily: 'HelveticaNeue',
    fontWeight: '700',
    marginLeft: 20,
    letterSpacing: -2
  },
  textBottom: {
    fontSize: 28,
    margin: 0,
    color: '#fff',
    fontFamily: 'HelveticaNeue',
    fontWeight: '300',
    marginLeft: 20,
    paddingBottom: 10,
    marginTop: -5,
    letterSpacing: -2,
  },
  intro: {
    color: '#fff',
    fontFamily: 'HelveticaNeue',
    fontWeight: '300',
    paddingTop: 10,
    fontSize: 18
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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
    color: '#fff',
    fontWeight: '700',

  },
  register: {
    marginTop: 20,
    borderBottomColor: 'rgba(255,255,255, 0.6)',
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  registerText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12
  }
});

AppRegistry.registerComponent('ColCacchio', () => ColCacchio);
