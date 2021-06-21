import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  topContainer: {
    position: 'absolute',
    width: Metrics.screenWidth,
    alignItems: 'center',
    backgroundColor: Colors.black
  },
  reachabilityText: {
    fontFamily: Fonts.type.semibold,
    fontSize: Fonts.size.text,
    color: Colors.white,
    marginBottom: Metrics.baseMargin
  }
});

export default styles;
