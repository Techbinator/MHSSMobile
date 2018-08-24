import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button, View, Grid, Col, Item, Icon, Input } from 'native-base';

import styles from './styles';

const SearchHeader = props => {
  return (
    <View style={styles.searchHeader.container}>
      <Item style={styles.searchHeader.content}>
        <Input
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          style={styles.searchHeader.input}
          placeholder="Search"
        />
        <Button transparent onPress={() => props.onSearch()}>
          <Icon name="search" />
        </Button>
        <Button transparent onPress={() => props.onExport()}>
          <Icon name="download" />
        </Button>
      </Item>
    </View>
  );
};

SearchHeader.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
};

export default SearchHeader;
