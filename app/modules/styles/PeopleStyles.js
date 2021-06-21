import { StyleSheet } from 'react-native';
import { ApplicationStyles, scale, Colors, Fonts } from '../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  list: {
    flex: 1
  },
  contentList: {
    flexGrow: 1,
    paddingVertical: scale(10)
  },
  noDataContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary
  },
  noDataText: {
    fontFamily: Fonts.type.semibold,
    fontSize: Fonts.size.medium,
    color: Colors.semiPrimary
  },
  searchIcon: {
    width: scale(22),
    height: scale(22),
    tintColor: Colors.semiPrimary
  },
  searchContainer: {
    width: scale(300),
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: scale(-35),
    borderRadius: 8,
    backgroundColor: Colors.white
  },
  textInput: {
    flex: 1,
    width: scale(280),
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.medium,
    color: Colors.primary
  },
  peopleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: scale(5),
    padding: scale(10),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.semiPrimary,
    backgroundColor: Colors.primary
  },
  subContainer: {
    flex: 1,
    flexShrink: 1,
    flexWrap: 'wrap'
  },
  nameText: {
    fontFamily: Fonts.type.semibold,
    fontSize: Fonts.size.medium,
    color: Colors.semiPrimary
  },
  arrowNext: {
    width: scale(15),
    height: scale(15),
    tintColor: Colors.semiPrimary
  }
});

export default styles;
