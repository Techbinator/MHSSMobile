import React from 'react-native';
const { Dimensions } = React;
const textColor = '#FFF';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  slides: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight,
    width: deviceWidth,
  },
  imageIcons: {
    fontSize: 80,
    fontWeight: 'thin',
    color: textColor,
  },
  helpTitle: {
    fontSize: 22,
    padding: 40,
    paddingBottom: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: textColor,
  },
  helpText: {
    fontFamily: 'Roboto_light',
    fontSize: 16,
    padding: 60,
    paddingTop: 0,
    textAlign: 'center',
    color: textColor,
  },
  slideBtn: {
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
};
