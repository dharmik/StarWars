import { moderateScale } from './Metrics';

const type = {
  regular: 'SFUIDisplay-Regular',
  medium: 'SFUIDisplay-Medium',
  bold: 'SFUIDisplay-Bold',
  semibold: 'SFUIDisplay-Semibold',
  heavy: 'SFUIDisplay-Heavy',
  light: 'SFUIDisplay-Light'
};

const size = {
  h1: moderateScale(38),
  h2: moderateScale(34),
  h3: moderateScale(30),
  h4: moderateScale(26),
  h5: moderateScale(20),
  h6: moderateScale(19),
  input: moderateScale(18),
  regular: moderateScale(17),
  label: moderateScale(16),
  text: moderateScale(15),
  medium: moderateScale(14),
  small: moderateScale(12),
  extraSmall: moderateScale(10),
  tiny: moderateScale(8.5)
};

const style = {
  h1: {
    fontFamily: type.regular,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.medium,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.regular,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.regular,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.regular,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.regular,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.regular,
    fontSize: size.medium
  },
  label: {
    fontFamily: type.regular,
    fontSize: size.label
  }
};

export default {
  type,
  size,
  style
};
