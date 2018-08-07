import { Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  overviewHeaderContainer: {
    padding: 20,
    paddingTop: 30,
    alignItems: 'center',
  },
  overviewHeader: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '900',
    alignSelf: 'center',
  },
  overviewHead: {
    opacity: 0.9,
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#FFF',
  },
  overviewContent: {
    padding: 20,
    backgroundColor: '#FFF',
  },
  overviewTopicsBox: {
    padding: 5,
  },
  overviewInfoHeader: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#444',
    paddingTop: 5,
  },
  overviewInfoPerc: {
    alignSelf: 'flex-end',
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: 'contain',
  },

  progress: {
    height: 20,
    transform: [{ scaleX: 1.0 }, { scaleY: 5 }],
  },
  categoryIcon: {
    fontSize: 25,
    color: '#c9c9c9',
  },
  switch: {
    padding: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  switchTextd: {
    color: '#444',
    paddingRight: 10,
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
  slides: {
    height: deviceHeight,
    width: deviceWidth,
  },
};
