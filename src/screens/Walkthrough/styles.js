import React from 'react-native';
import themeColors from '@theme/variables/commonColor';

const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const textColor = '#FFF';

export default {
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
  },
  slides: {
    flex: 1,
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: 'transparent',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.brandPrimary,
    borderWidth: 0,
    marginTop: 50,
    marginBottom: 70,
    marginLeft: 30,
    marginRight: 30,
  },
  imageIcons: {
    fontSize: 80,
    fontWeight: 'thin',
    color: textColor,
  },
  helpTitle: {
    fontSize: 22,
    padding: 20,
    paddingBottom: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: textColor,
  },
  helpText: {
    fontFamily: 'Roboto_light',
    fontSize: 16,
    padding: 30,
    paddingTop: 0,
    textAlign: 'center',
    color: textColor,
  },
  slideBtn: {
    wrapper: {
      alignSelf: 'center',
    },
    text: {
      color: textColor,
    },
  },
};
