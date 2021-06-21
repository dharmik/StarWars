import { StyleSheet } from 'react-native';
import { ApplicationStyles, scale, Colors, Fonts } from '../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  content: {
    flex: 1
  },
  detailContainer: {
    ...ApplicationStyles.screen.shadow,
    margin: scale(8),
    padding: scale(10),
    borderRadius: scale(10),
    flexWrap: 'wrap',
    backgroundColor: Colors.primary
  },
  detailText: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h6,
    color: Colors.semiPrimary,
    margin: scale(5)
  },
  subContainer: {
    padding: scale(10),
    flexDirection: 'row',
    alignItems: 'center'
  },
  bullet: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: Colors.lightGray
  },
  infoTitle: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.medium,
    color: Colors.semiPrimary,
    marginHorizontal: scale(8)
  }
});

export default styles;
