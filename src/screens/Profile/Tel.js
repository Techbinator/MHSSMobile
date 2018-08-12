import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon, Grid, Col } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

const Tel = ({ name, number }) => {
  return (
    <View style={[styles.tel.container]}>
      <Grid>
        <Col size={1}>
          <TouchableOpacity>
            <Icon name="ios-call" style={[styles.tel.telIcon]} />
          </TouchableOpacity>
        </Col>
        <Col size={4}>
          <View>
            <View style={styles.tel.telNumberColumn}>
              <Text style={styles.tel.telNumberText}>{number}</Text>
            </View>
            <View style={styles.tel.telNameColumn}>
              {name.trim().length !== 0 && (
                <Text style={styles.tel.telNameText}>{name}</Text>
              )}
            </View>
          </View>
        </Col>
        <Col size={1}>
          <TouchableOpacity>
            <Icon name="ios-chatboxes-outline" />
          </TouchableOpacity>
        </Col>
      </Grid>
    </View>
  );
};

Tel.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
};

Tel.defaultProps = {
  name: null,
};

export default Tel;
