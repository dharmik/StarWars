import { StyleSheet } from 'react-native';
import { Colors, Metrics, scale, Fonts } from '../../theme';

const styles = StyleSheet.create({
  headerStyle: {
    width: Metrics.screenWidth,
    backgroundColor: Colors.primary
  },
  flexStyle: {
    flex: 1,
    flexDirection: 'row'
  },
  titleContainer: {
    width: scale(200),
    alignItems: 'center',
    justifyContent: 'center',
    left: scale(0),
    backgroundColor: Colors.transparent
  },
  headerTitle: {
    color: Colors.semiPrimary,
    fontFamily: Fonts.type.semibold,
    fontSize: Fonts.size.h6,
    textAlign: 'center'
  },
  leftIcon: {
    width: scale(55),
    height: scale(50),
    padding: scale(10)
  },
  icon: {
    width: scale(28),
    height: scale(28),
    tintColor: Colors.semiPrimary,
    resizeMode: 'contain'
  },
  rightIcon: {
    width: scale(35),
    height: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 1
  },
  rightTxt: {
    width: scale(55),
    marginRight: scale(20),
    color: Colors.white,
    fontSize: Fonts.size.label
  }
});

export default styles;
