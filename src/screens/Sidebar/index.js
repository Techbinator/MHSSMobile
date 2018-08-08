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
            noIndent
            button
            iconLeft
            style={styles.listItem}
            onPress={() => {
              navigation.navigate('Expenses');
            }}>
            <Icon name="ios-cash-outline" style={styles.linkIcon} />
            <Text style={styles.linkText}>My Expenses</Text>
          </ListItem>
          <ListItem
            noIndent
            button
            iconLeft
            style={styles.listItem}
            onPress={() => {
              navigation.navigate('Categories');
            }}>
            <Icon name="ios-apps-outline" style={styles.linkIcon} />
            <Text style={styles.linkText}>Categories</Text>
          </ListItem>
          <ListItem
            noIndent
            button
            iconLeft
            style={styles.listItem}
            onPress={() => {
              navigation.navigate('ExpensesCharts');
            }}>
            <Icon name="ios-stats-outline" style={styles.linkIcon} />
            <Text style={styles.linkText}>Expenses Analytics</Text>
          </ListItem>
          <ListItem
            noIndent
            button
            iconLeft
            style={styles.listItem}
            onPress={() => {
              navigation.navigate('Calendar');
            }}>
            <Icon name="ios-calendar-outline" style={styles.linkIcon} />
            <Text style={styles.linkText}>Calendar</Text>
          </ListItem>
          <ListItem
            noIndent
            button
            iconLeft
            style={styles.listItem}
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <Icon name="ios-search-outline" style={styles.linkIcon} />
            <Text style={styles.linkText}>Search & Export</Text>
          </ListItem>
          <ListItem
            noIndent
            button
            iconLeft
            style={styles.listItem}
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Icon name="ios-person-outline" style={styles.linkIcon} />
            <Text style={styles.linkText}> Profile</Text>
          </ListItem>
          <ListItem
            noIndent
            button
            iconLeft
            style={styles.listItem}
            onPress={() => {
              navigation.navigate('Settings');
            }}>
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
                    source={require('@assets/Avatars/john.png')}
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
