import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button, View, Grid, Col, Item, Icon, Input } from 'native-base';

import styles from './styles';

const SearchHeader = props => {
  return (
    <View style={styles.searchHeader.container}>
      <Grid>
        <Col size={2}>
          <View>
            <Item>
              <Input placeholder="Search" />
              <Button light onPress={() => props.onSearch()}>
                <Icon name="ios-search" />
              </Button>
            </Item>
          </View>
        </Col>
        <Col size={1}>
          <Button
            rounded
            primary
            block
            small
            style={styles.searchHeader.exportBtn}
            onPress={() => props.onExport()}>
            <Text>Export</Text>
          </Button>
        </Col>
      </Grid>
    </View>
  );
};

SearchHeader.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
};

export default SearchHeader;
