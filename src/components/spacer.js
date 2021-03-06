import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet } from 'react-native';

const Spacer = () => {
  return <View style={styles.spacer}></View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});


export default Spacer;