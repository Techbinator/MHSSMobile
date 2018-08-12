import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Grid, Col, Icon } from 'native-base';

import styles from './styles';

const Social = () => {
  return (
    <View style={[styles.social.container]}>
      <Grid>
        <Col size={2}>
          <TouchableOpacity>
            <Icon name="logo-twitter" style={styles.social.icon} />
          </TouchableOpacity>
        </Col>
        <Col size={2}>
          <TouchableOpacity>
            <Icon name="logo-facebook" style={styles.social.icon} />
          </TouchableOpacity>
        </Col>
        <Col size={2}>
          <TouchableOpacity>
            <Icon name="logo-instagram" style={styles.social.icon} />
          </TouchableOpacity>
        </Col>
      </Grid>
    </View>
  );
};

export default Social;
