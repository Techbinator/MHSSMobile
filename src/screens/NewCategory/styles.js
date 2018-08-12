import theme from '@theme/variables/mmoney';

export default {
  background: {
    flex: 1,
    width: null,
    height: null,
  },

  header: {
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
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
    submitBtn: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      left: 0,
      borderRadius: 0,
    },
  },

  footer: {
    linkText: {
      opacity: 0.7,
      fontSize: 14,
      color: '#FFF',
      textAlign: 'right',
      marginRight: 0,
      paddingRight: 0,
    },
  },

  picker: {
    input: {
      width: '100%',
      height: 80,
      paddingTop: 10,
      paddingBottom: 20,
      backgroundColor: '#FFF',
    },
    placeholderText: {
      backgroundColor: '#FFF',
      color: theme.inputColorPlaceholder,
      fontSize: theme.DefaultFontSize,
    },
    itemStyle: {
      backgroundColor: '#FFF',
      paddingLeft: 20,
    },
    itemIconStyle: {
      fontSize: 30,
      color: theme.dropdownLinkColor,
      paddingLeft: 40,
    },
    categoryIcon: {
      alignSelf: 'center',
      fontSize: 60,
      color: theme.dropdownLinkColor,
    },
  },
};
