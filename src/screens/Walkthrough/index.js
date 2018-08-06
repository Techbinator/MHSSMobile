import React, { Component } from 'react';
import {
  Platform,
  Dimensions,
  StatusBar,
  View,
  ImageBackground,
} from 'react-native';
import { Container, Content, Text, Button, Icon } from 'native-base';
import Carousel from 'react-native-carousel-view';

import styles from './styles';
import themeColors from '../../theme/variables/commonColor';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const bg = require('../../../assets/Background/bg2.png');

class Walkthrough extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={bg} style={styles.background}>
          <Content>
            <Carousel
              width={deviceWidth}
              height={deviceHeight}
              loop={false}
              indicatorAtBottom
              indicatorOffset={deviceHeight / 15}
              indicatorSize={Platform.OS === 'android' ? 15 : 10}
              indicatorColor={themeColors.brandPrimary}
              animate={false}>
              <View style={styles.slides}>
                <Icon name="ios-cash-outline" style={styles.imageIcons} />
                <Text style={styles.helpTitle}>ORGANIZE YOUR FINANCES</Text>
                <Text numberOfLines={3} style={styles.helpText}>
                  Easy and user friendly Personal Finance App to take control of
                  your money
                </Text>
                <Button
                  primary
                  rounded
                  onPress={() => this.props.navigation.navigate('Drawer')}
                  style={styles.slideBtn}>
                  <Text>Skip Tour</Text>
                </Button>
              </View>
              <View style={styles.slides}>
                <Icon name="ios-calculator-outline" style={styles.imageIcons} />
                <Text style={styles.helpTitle}>TRACK YOUR MONEY</Text>
                <Text numberOfLines={3} style={styles.helpText}>
                  It helps you traks your spending quickly and easily.
                </Text>
                <Button
                  primary
                  rounded
                  onPress={() => this.props.navigation.navigate('Drawer')}
                  style={styles.slideBtn}>
                  <Text>Skip Tour</Text>
                </Button>
              </View>
              <View style={styles.slides}>
                <Icon name="ios-stats" style={styles.imageIcons} />
                <Text style={styles.helpTitle}>UNDERSTAND YOUR FINANCES</Text>
                <Text numberOfLines={3} style={styles.helpText}>
                  Overview your past and current spending progress by category
                </Text>
                <Button
                  primary
                  rounded
                  onPress={() => this.props.navigation.navigate('Drawer')}
                  style={styles.slideBtn}>
                  <Text>Get Started</Text>
                </Button>
              </View>
            </Carousel>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Walkthrough;
