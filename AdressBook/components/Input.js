import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

const styles = StyleSheet.create({
  box: {
    marginVertical: 10,
    padding: 5,
    backgroundColor: '#f0f0f0',
  }
})

const Input = ({ label, value, onChange }) => (
  <View style={styles.box}>
    <TextInput
      placeholder={label}
      value={value}
      onChangeText={onChange}
      underlineColorAndroid="transparent"
    />
  </View>
);

export default Input