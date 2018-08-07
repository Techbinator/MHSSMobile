import React from 'react';
import { View, Text, Switch } from 'native-base';

import styles from './styles';
import themeColors from '@theme/variables/commonColor';
var Color = require('color');
const light = Color(themeColors.brandPrimary).alpha(0.3);

const SwitchButton = ({ ...props }) => {
  return (
    <View style={styles.switchContainer}>
      <Text style={styles.switchText}>{props.label}</Text>
      <Switch
        onTintColor={light}
        thumbTintColor={themeColors.brandPrimary}
        tintColor={themeColors.brandPrimary}
        onValueChange={props.onValueChange}
        value={props.value}
      />
    </View>
  );
};

export default SwitchButton;
