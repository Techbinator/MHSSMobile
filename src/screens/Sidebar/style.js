const React = require('react-native');

const { Platform } = React;

export default {
  drawerContent: {
    paddingTop: Platform.OS === 'android' ? 20 : 30,
    backgroundColor: '#fff',
  },
  listItem: {
    height: 70,
  },
  linkText: {
    paddingLeft: 15,
    color: '#444',
  },
  linkIcon: {
    color: '#444',
    fontSize: Platform.OS === 'android' ? 25 : 30,
  },
  logoutContainer: {
    padding: 30,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  logoutbtn: {
    paddingTop: 30,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#fff',
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: Platform.OS === 'android' ? 40 : 20,
  },
};
