export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  sectionHeader: {
    container: {
      backgroundColor: '#999999',
      paddingLeft: 0,
    },
    text: {
      textAlign: 'left',
      color: '#FFF',
      fontSize: 20,
    },
    caret: {
      position: 'absolute',
      left: 20,
      bottom: -20,
      color: '#999999',
    },
  },
  expense: {
    container: {
      elevation: 0,
      marginBottom: 0,
      marginTop: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
    odd: {
      backgroundColor: '#E4E4E4',
    },
    title: {},
    amount: {
      marginRight: 10,
    },
    label: {},
    actions: {
      container: {},
    },
    detailText: {},
  },
  searchHeader: {
    container: {
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0,
      borderRightWidth: 0,
      height: 60,
      backgroundColor: '#FFF',
    },
    exportBtn: {
      alignSelf: 'flex-end',
      marginTop: 10,
      marginBottom: 5,
      marginRight: 5,
      height: 30,
    },
  },
};
