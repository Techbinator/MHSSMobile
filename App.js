import React from 'react';
import * as Expo from 'expo';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import configureStore from './src/store/configureStore';
import variables from './src/theme/variables/commonColor';
import getTheme from './src/theme/components';
import Application from './src/App';

export default class App extends React.Component {
  state = {
    isLoading: false,
  };

  constructor() {
    super();
    this.state = {
      isLoading: false,
      isReady: false,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Roboto_light: require('./assets/Fonts/Roboto-Light.ttf'),
      Roboto_thin: require('./assets/Fonts/Roboto-Thin.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      Feather: require('@expo/vector-icons/fonts/Feather.ttf'),
      'simple-line-icons': require('@expo/vector-icons/fonts/SimpleLineIcons.ttf'),
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady || this.state.isLoading) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.state.store}>
          <Application />
        </Provider>
      </StyleProvider>
    );
  }
}
