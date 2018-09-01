export default {
  background: {
    flex: 1,
    width: null,
    height: null,
  },
  header: {
    container: {
      flex: 0.6,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      resizeMode: 'contain',
      width: 150,
    },
  },
  form: {
    container: {
      flex: 0.5,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    content: {
      flex: 1,
      width: '100%',
      paddingBottom: 20,
    },
    linkBtn: {
      opacity: 0.9,
      fontSize: 14,
      color: '#FFF',
      textAlign: 'left',
      marginLeft: 5,
      paddingLeft: 0,
    },
    submitBtn: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
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
