import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import {
  Container,
  Content,
  Text,
  Icon,
  ListItem,
  Thumbnail,
  View,
} from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import styles from './style';
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Login' })],
});

class SideBar extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <Content style={styles.drawerContent}>
          <ListItem
            last
            style={styles.listItem}
            button
            onPress={() => {
              navigation.navigate('Expenses');
            }}
            iconLeft>
            <Icon name="ios-cash-outline" style={styles.linkIcon} />
            <Text style={styles.linkText}>My Expenses</Text>
          </ListItem>
          <ListItem
            last
            style={styles.listItem}
            button
            onPress={() => {
              navigation.navigate('Categories');
            }}
            iconLeft>
            <Icon name="ios-apps-outline" style={styles.linkIcon} />
            <Text style={styles.linkText}>Categories</Text>
          </ListItem>
          <ListItem
            last
            style={styles.listItem}
            button
            onPress={() => {
              navigation.navigate('Overview');
            }}
            iconLeft>
            <Icon name="ios-stats-outline" style={styles.linkIcon} />
            <Text style={styles.linkText}>Overview</Text>
          </ListItem>
          <ListItem
            last
            style={styles.listItem}
            button
            onPress={() => {
              navigation.navigate('Calendar');
            }}
            iconLeft>
            <Icon name="ios-calendar-outline" style={styles.linkIcon} />
            <Text style={styles.linkText}>Calendar</Text>
          </ListItem>
          <ListItem
            last
            style={styles.listItem}
            button
            onPress={() => {
              navigation.navigate('Search');
            }}
            iconLeft>
            <Icon name="ios-search-outline" style={styles.linkIcon} />
            <Text style={styles.linkText}>Search & Export</Text>
          </ListItem>
          <ListItem
            last
            style={styles.listItem}
            button
            onPress={() => {
              navigation.navigate('Profile');
            }}
            iconLeft>
            <Icon name="ios-person-outline" style={styles.linkIcon} />
            <Text style={styles.linkText}> Profile</Text>
          </ListItem>
          <ListItem
            last
            style={styles.listItem}
            button
            onPress={() => {
              navigation.navigate('Settings');
            }}
            iconLeft>
            <Icon name="ios-options-outline" style={styles.linkIcon} />
            <Text style={styles.linkText}>Settings</Text>
          </ListItem>
        </Content>
        <View style={styles.logoutContainer}>
          <View style={styles.logoutbtn}>
            <Grid>
              <Col>
                <TouchableOpacity
                  onPress={() => {
                    navigation.dispatch(resetAction);
                  }}
                  style={{
                    alignSelf: 'flex-start',
                    backgroundColor: 'transparent',
                  }}>
                  <Text style={{ fontWeight: 'bold', color: '#444' }}>
                    LOG OUT
                  </Text>
                  <Text note>John Doe</Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity
                  style={{ alignSelf: 'flex-end' }}
                  onPress={() => {
                    navigation.navigate('Profile');
                  }}>
                  <Thumbnail
                    source={require('../../../assets/Avatars/john.png')}
                    style={styles.profilePic}
                  />
                </TouchableOpacity>
              </Col>
            </Grid>
          </View>
        </View>
      </Container>
    );
  }
}

export default SideBar;
