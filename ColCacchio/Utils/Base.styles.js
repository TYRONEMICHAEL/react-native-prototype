var React = require('react-native');
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

var baseStyles = require('../Utils/Base.styles');

var {
  StyleSheet
} = React;

module.exports = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    width: screenWidth
  },
  baseFont: {
    fontFamily: 'HelveticaNeue',
    color: 'rgba(255,255,255, 0.9)',
    fontSize: 18,
    fontWeight: '300'
  },
  link: {
    color: '#d86638'
  },
  fontBold: {
    fontWeight: 'bold'
  },
  borderTop: {
    borderTopColor: 'rgba(255,255,255, 0.9)',
    borderTopWidth: 1,
    marginTop: 10,
    paddingTop: 10
  },
  button: {
    backgroundColor: '#d86638',
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
  pageTitle: {
    width: screenWidth,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    borderBottomColor: 'rgba(255,255,255,0.2)',
    borderBottomWidth: 1,
    shadowOffset: {
      width: 0,
      height: 1
    }
  },
  pageTitleText: {
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '300'
  },
  logo:{
    backgroundColor: 'rgba(0,0,0,0)',
    width: 200,
    height: 76
  }
});