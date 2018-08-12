import { Platform } from 'react-native';

export default {
  background: {
    flex: 1,
    width: null,
    height: null,
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  titles: {
    container: {
      paddingTop: 10,
      paddingLeft: 15,
      paddingBottom: 10,
      borderWidth: 0,
    },
    content: {
      flexDirection: 'row',
    },
    text: {
      fontFamily: 'Roboto_light',
      fontSize: 26,
      color: '#FFF',
    },
    suffix: {
      fontFamily: 'Roboto_light',
      fontSize: 26,
      opacity: 0.8,
      fontWeight: '100',
      color: '#FFF',
    },
    subTitle: {
      fontFamily: 'Roboto_light',
      paddingTop: 10,
      fontSize: 24,
      opacity: Platform.OS === 'android' ? 0.6 : 0.9,
      fontWeight: '100',
      color: '#FFF',
    },
  },
};
