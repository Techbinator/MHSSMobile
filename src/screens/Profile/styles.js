import { Platform } from 'react-native';
import commonColor from '@theme/variables/commonColor';

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  separator: {
    borderColor: '#EDEDED',
    borderWidth: 0,
    borderTopWidth: 0.8,
  },
  profile: {
    container: {
      alignSelf: 'center',
      paddingTop: 10,
      marginBottom: 15,
    },
    avatar: {
      alignSelf: 'center',
      marginTop: 20,
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    title: {
      fontFamily: 'Roboto_light',
      alignSelf: 'center',
      fontSize: 28,
      color: '#FFF',
    },
    subTitle: {
      fontFamily: 'Roboto_light',
      alignSelf: 'center',
      paddingTop: 10,
      fontSize: 24,
      opacity: Platform.OS === 'android' ? 0.6 : 0.95,
      fontWeight: '100',
      color: '#FFF',
    },
  },
  overview: {
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 10,
      backgroundColor: '#FAFAFB',
    },
    column: {
      justifyContent: 'center',
    },
    title: {
      alignSelf: 'center',
      fontSize: 24,
      marginBottom: 5,
    },
    subtitle: {
      color: 'gray',
      fontSize: 10,
      fontWeight: '200',
      alignSelf: 'center',
    },
    marker: {
      alignSelf: 'center',
      fontSize: 24,
      fontWeight: '600',
    },
  },
  tel: {
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 15,
      marginBottom: 15,
      paddingLeft: 10,
      backgroundColor: '#FFF',
    },
    telIcon: {
      color: commonColor.brandSuccess,
      justifyContent: 'flex-end',
      fontSize: 30,
    },
    telNameColumn: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    telNameText: {
      color: 'gray',
      fontSize: 14,
      fontWeight: '200',
    },
    telNumberColumn: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginBottom: 5,
    },
    telNumberText: {
      fontSize: 16,
    },
  },
  email: {
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 15,
      marginBottom: 15,
      paddingLeft: 10,
      backgroundColor: '#FFF',
    },
    emailIcon: {
      color: commonColor.brandSuccess,
      justifyContent: 'flex-end',
      fontSize: 30,
    },
    emailNameColumn: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    emailNameText: {
      color: 'gray',
      fontSize: 14,
      fontWeight: '200',
    },
    emailText: {
      fontSize: 16,
    },
  },
  social: {
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 30,
      paddingRight: 30,
    },
    icon: {
      alignSelf: 'center',
      fontSize: 24,
      marginBottom: 5,
    },
  },
};
