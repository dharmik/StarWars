import NetInfo from '@react-native-community/netinfo';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Strings } from '../constants';
import styles from './styles/ReachabilityViewStyles';

const ReachabilityView = ({ containerStyle }) => {
  const [isConnected, setConnected] = useState();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  if (isConnected) {
    return null;
  } else {
    const topContainer = StyleSheet.compose(
      styles.topContainer,
      containerStyle
    );
    return (
      <SafeAreaView style={topContainer}>
        <Text style={styles.reachabilityText}>{Strings.notConnected}</Text>
      </SafeAreaView>
    );
  }
};

ReachabilityView.propTypes = {
  containerStyle: PropTypes.object
};
export default ReachabilityView;
