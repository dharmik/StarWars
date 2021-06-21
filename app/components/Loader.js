import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import { ApplicationStyles as styles, Colors } from '../theme';

const { opacityContainer, container } = styles.loading;

const Loader = ({ isShowOpacity = true }) => (
  <>
    {isShowOpacity && <View style={opacityContainer} />}
    <View style={container}>
      <ActivityIndicator size="large" color={Colors.white} />
    </View>
  </>
);
Loader.propTypes = {
  isShowOpacity: PropTypes.bool
};
export default Loader;
