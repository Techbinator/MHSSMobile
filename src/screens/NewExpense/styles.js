import { Platform } from 'react-native';
import theme from '@theme/variables/mmoney';

export default {
  background: {
    flex: 1,
    width: null,
    height: null,
  },
  content: {
    backgroundColor: '#FFF',
  },
  form: {
    container: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#FFF',
    },
    content: {
      flex: 1,
      width: '100%',
    },
    formBtn: {
      width: '100%',
      borderRadius: 0,
    },
  },

  footer: {
    flexDirection: 'column',
    height: 120,
  },

  picker: {
    container: {
      borderBottomWidth: 0,
      marginLeft: 0,
      paddingLeft: Platform.OS === 'android' ? 8 : 0,
    },
    input: {
      height: 80,
    },
    placeholderText: {
      color: theme.inputColorPlaceholder,
      fontSize: theme.DefaultFontSize,
    },
    itemStyle: {
      backgroundColor: '#FFF',
    },
    itemTextStyle: {
      color: theme.dropdownLinkColor,
    },
  },

  datePicker: {
    dateInput: {
      height: 70,
      paddingLeft: 15,
      borderColor: '#F6F6F6',
      borderWidth: 1,
      borderTopColor: '#F6F6F6',
      borderTopWidth: 1,
    },
    dateTouchBody: {
      paddingBottom: 0,
    },
    dateText: {
      alignSelf: 'flex-start',
      fontSize: theme.DefaultFontSize,
    },
    dateIcon: {
      fontSize: 25,
      color: '#95959A',
      position: 'absolute',
      right: 15,
      bottom: 4,
    },
    placeholderText: {
      alignSelf: 'flex-start',
      color: '#95959A',
      fontSize: theme.DefaultFontSize,
    },
  },

  switchContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    paddingTop: 25,
    paddingRight: 15,
  },
  switchText: {
    color: '#95959A',
    paddingTop: 5,
    paddingRight: 15,
  },
  formError: {
    color: theme.brandDanger,
    fontSize: Platform.OS === 'android' ? 12 : 15,
    paddingRight: 5,
    textAlign: 'right',
  },
};
