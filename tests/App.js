/**
 * Created by nghinv on Tue May 12 2020
 * Copyright (c) 2020 nghinv@lumi.biz
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato'
  }
});
