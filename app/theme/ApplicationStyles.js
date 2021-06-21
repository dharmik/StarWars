import Colors from './Colors';
import Fonts from './Fonts';
import { Metrics, scale } from './Metrics';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    header: {
      borderBottomWidth: 0
    },
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.white
    },
    headerContainer: {
      backgroundColor: Colors.primary
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    reachabilityView: {
      position: 'relative'
    },
    shadow: {
      elevation: 3,
      shadowColor: Colors.shadow,
      shadowOffset: {
        width: 2,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 0.7
    }
  },
  toast: {
    toastContainer: {
      borderRadius: scale(10),
      justifyContent: 'center',
      alignItems: 'center'
    },
    textStyle: {
      fontFamily: Fonts.type.regular,
      fontSize: Fonts.size.regular,
      textAlign: 'center'
    }
  },
  loading: {
    opacityContainer: {
      position: 'absolute',
      width: Metrics.screenWidth,
      height: Metrics.screenHeight,
      backgroundColor: Colors.black,
      opacity: 0.5
    },
    container: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      width: Metrics.screenWidth,
      height: Metrics.screenHeight,
      backgroundColor: Colors.transparent
    }
  }
};

export default ApplicationStyles;
