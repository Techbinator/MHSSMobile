import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Text, Icon } from 'native-base';

import styles from './styles';
class MenuItem extends React.PureComponent {
  onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const itemStyle = this.props.selected
      ? [styles.menuItem.container, styles.menuItem.selected]
      : styles.menuItem.container;
    return (
      <ListItem onPress={this.onPress} style={itemStyle}>
        <Icon name={this.props.icon} style={styles.menuItem.icon} />
        <Text style={styles.menuItem.title}>{this.props.title}</Text>
      </ListItem>
    );
  }
}

MenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  onPressItem: PropTypes.func,
  selected: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default MenuItem;
