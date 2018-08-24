import { Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  spinner: {
    paddingTop: deviceHeight / 2 - 10,
  },
  sectionHeader: {
    container: {
      paddingLeft: 0,
    },
    text: {
      textAlign: 'left',
    },
    caret: {
      position: 'absolute',
      left: 20,
      bottom: -20,
      color: '#F4F4F4',
    },
  },
  expense: {
    container: {
      elevation: 0,
      marginBottom: 0,
      marginTop: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0.7,
      borderColor: '#ddd',
    },
    content: {
      paddingTop: 14,
      paddingBottom: 14,
    },
    title: {
      fontSize: 14,
    },
    amount: {
      marginRight: 10,
      fontSize: 14,
    },
    detailText: {
      fontSize: 12,
      color: '#777',
    },
  },
  searchHeader: {
    container: {
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0,
      borderRightWidth: 0,
      marginTop: 10,
      marginBottom: 10,
      height: 50,
    },
    content: {
      backgroundColor: 'rgba(255,255,255,0.3)',
      marginBottom: 8,
      borderWidth: 0,
      borderColor: 'transparent',
    },
    input: {
      color: '#FFF',
      paddingLeft: 30,
    },
    exportBtn: {
      alignSelf: 'flex-end',
      marginBottom: 10,
      marginRight: 5,
      height: 30,
    },
  },
};
