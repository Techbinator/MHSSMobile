import React from 'react';
import { Text, Item, Input, Icon, View } from 'native-base';

import styles from './styles';

export default function LoginInput({ input, meta: { touched, error } }) {
  return (
    <View>
      <Item error={error && touched} rounded style={styles.inputWrapper}>
        <Icon
          active
          name={
            input.name === 'username'
              ? 'ios-person-outline'
              : input.name === 'email'
                ? 'ios-mail-outline'
                : 'ios-lock-outline'
          }
          style={styles.icon}
        />
        <Input
          ref={c => (this.textInput = c)}
          placeholderTextColor="#E5E4E4"
          style={styles.input}
          placeholder={
            input.name === 'username'
              ? 'Username'
              : input.name === 'email'
                ? 'Email'
                : 'Password'
          }
          secureTextEntry={input.name === 'password' ? true : false}
          {...input}
        />
        {touched && error ? (
          <Icon
            active
            style={styles.errorIcon}
            onPress={() => this.textInput && this.textInput._root.clear()}
            name="close"
          />
        ) : (
          <Text />
        )}
      </Item>
      {touched && error ? (
        <Text style={styles.errorText1}>{error}</Text>
      ) : (
        <Text style={styles.errorText2}>Unknown Error</Text>
      )}
    </View>
  );
}
