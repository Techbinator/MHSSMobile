import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Grid, Col } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';
import theme from '@theme/variables/mmoney';

const Overview = ({ navigation }) => {
  return (
    <View style={[styles.overview.container]}>
      <Grid>
        <Col size={2}>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <View>
              <View style={styles.overview.column}>
                <Text style={styles.overview.title}>15</Text>
              </View>
              <View style={styles.overview.column}>
                <Text style={styles.overview.subtitle}>CATEGORIES</Text>
                <Text
                  style={[
                    styles.overview.marker,
                    { color: theme.brandSuccess },
                  ]}>
                  _
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Col>
        <Col size={2}>
          <TouchableOpacity onPress={() => navigation.navigate('Expenses')}>
            <View>
              <View style={styles.overview.column}>
                <Text style={styles.overview.title}>250</Text>
              </View>
              <View style={styles.overview.column}>
                <Text style={styles.overview.subtitle}>EXPENSES LOGGED</Text>
                <Text
                  style={[
                    styles.overview.marker,
                    { color: theme.brandWarning },
                  ]}>
                  _
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Col>
        <Col size={2}>
          <TouchableOpacity onPress={() => navigation.navigate('Overview')}>
            <View>
              <View style={styles.overview.column}>
                <Text style={styles.overview.title}>11K</Text>
              </View>
              <View style={styles.overview.column}>
                <Text style={styles.overview.subtitle}>TOTAL SPENT</Text>
                <Text
                  style={[styles.overview.marker, { color: theme.brandThird }]}>
                  _
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Col>
      </Grid>
    </View>
  );
};

Overview.propTypes = {
  navigation: PropTypes.any,
};

export default Overview;
