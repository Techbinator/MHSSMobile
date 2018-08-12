export default {
  background: {
    flex: 1,
    width: null,
    height: null,
  },

  header: {
    container: {
      flex: 0.3,
      backgroundColor: 'transparent',
      marginTop: 20,
    },
    navigation: {
      opacity: 0.8,
      fontSize: 38,
      color: '#FFF',
    },
    title: {
      fontFamily: 'Roboto_light',
      fontSize: 32,
      color: '#FFF',
      paddingLeft: 20,
    },
  },

  form: {
    container: {
      flex: 0.7,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
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
    linkBtn: {
      opacity: 0.9,
      fontSize: 14,
      color: '#FFF',
      textAlign: 'left',
      marginLeft: 5,
      paddingLeft: 0,
    },
  },
};
