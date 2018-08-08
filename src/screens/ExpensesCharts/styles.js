import { Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  chartTitle: {
    paddingTop: 40,
    fontSize: 18,
    textAlign: 'center',
  },
  slides: {
    height: deviceHeight,
    width: deviceWidth,
  },
};
