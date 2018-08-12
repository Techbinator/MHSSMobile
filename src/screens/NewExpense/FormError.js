import React from 'react';
import PropTypes from 'prop-types';

import { Text, Grid, Col } from 'native-base';

import styles from './styles';

const FormError = ({ error }) => {
  if (!error) {
    return null;
  }
  return (
    <Grid>
      <Col>
        <Text style={styles.error.text}>{error}</Text>
      </Col>
    </Grid>
  );
};

FormError.propTypes = {
  error: PropTypes.string,
};

FormError.defaultProps = {
  error: false,
};

export default FormError;
