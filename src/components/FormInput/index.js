import React from 'react';
import { Item, Input } from 'native-base';

import FormError from './FormError';

import styles from './styles';

export default function FormInput({
  label,
  autoCapitalize,
  keyboardType = 'default',
  returnKeyType = 'go',
  onChangeCustom = () => {},
  input: { onChange, ...input },
  meta: { touched, error },
}) {
  return (
    <React.Fragment>
      <Item error={error && touched} last style={styles.formItem}>
        <Input
          style={styles.formInput}
          placeholder={label}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onChange={value => {
            onChange(value);
          }}
          onChangeText={value => {
            onChangeCustom(value);
          }}
          {...input}
        />
      </Item>
      {touched && error && <FormError error={error} />}
    </React.Fragment>
  );
}
