import React from 'react-native';
import themeColors from '@theme/variables/commonColor';

const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

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
    borderWidth: 0,
    marginTop: 70,
    marginBottom: 70,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#F8F8F8',
  },
  imageIcons: {
    height: 120,
    resizeMode: 'contain',
  },
  helpTitle: {
    fontSize: 22,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
    fontWeight: '600',
    textAlign: 'center',
  },
  helpText: {
    fontFamily: 'Roboto_light',
    fontSize: 16,
    padding: 30,
    paddingTop: 0,
    textAlign: 'center',
  },
  slideBtn: {
    wrapper: {
      alignSelf: 'center',
    },
    text: {
      color: themeColors.brandPrimary,
    },
  },
};
