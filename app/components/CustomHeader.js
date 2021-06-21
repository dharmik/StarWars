import { Button, Header, Left, Right, Title } from 'native-base';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { Image, StatusBar, StyleSheet } from 'react-native';
import NavigationService from '../navigation/NavigationService';
import { Colors, Icons } from '../theme';
import styles from './styles/CustomHeaderStyles';

const LeftSection = ({ leftIcon, leftOnPress, innerRef }) => (
  <Left style={styles.flexStyle}>
    <Button
      transparent
      ref={innerRef}
      style={styles.leftIcon}
      onPress={leftOnPress}
    >
      {leftIcon}
    </Button>
  </Left>
);

const CenterTitle = ({ title, titleStyle, extraContent }) => (
  <Header noShadow style={styles.titleContainer}>
    <Title
      style={[styles.headerTitle, titleStyle]}
      numberOfLines={2}
      ellipsizeMode={'tail'}
    >
      {title}
    </Title>
    {extraContent && extraContent}
  </Header>
);

const RightSection = ({
  rightIcon,
  rightText,
  rightOnPress,
  rightSecond,
  rightSecondPress
}) => (
  <Right style={styles.flexStyle}>
    {rightSecond && (
      <Button transparent style={styles.rightIcon} onPress={rightSecondPress}>
        {rightSecond}
      </Button>
    )}
    <Button transparent style={styles.rightIcon} onPress={rightOnPress}>
      {rightIcon ? (
        rightIcon
      ) : (
        <Title style={styles.rightTxt}>{rightText}</Title>
      )}
    </Button>
  </Right>
);

const CustomHeader = (
  {
    title = '',
    left = false,
    center = true,
    right = false,
    titleStyle,
    leftIcon,
    rightIcon,
    rightText,
    leftOnPress,
    rightOnPress,
    rightSecond,
    rightSecondPress,
    customStyle,
    extraContent
  },
  ref
) => {
  const headerStyles = StyleSheet.compose(styles.headerStyle, customStyle);
  const titleStyles = StyleSheet.compose(styles.headerTitle, titleStyle);
  return (
    <>
      <Header style={headerStyles}>
        {left && (
          <LeftSection
            innerRef={ref}
            leftIcon={leftIcon}
            leftOnPress={leftOnPress}
          />
        )}
        {center && (
          <CenterTitle
            title={title}
            titleStyle={titleStyles}
            extraContent={extraContent}
          />
        )}
        {right && (
          <RightSection
            rightIcon={rightIcon}
            rightText={rightText}
            rightOnPress={rightOnPress}
            rightSecond={rightSecond}
            rightSecondPress={rightSecondPress}
          />
        )}
      </Header>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
    </>
  );
};

LeftSection.defaultProps = {
  leftIcon: <Image source={Icons.back} style={styles.icon} />,
  leftOnPress: () => NavigationService.goBack()
};

LeftSection.propTypes = {
  leftIcon: PropTypes.element,
  leftOnPress: PropTypes.func,
  innerRef: PropTypes.object
};

CenterTitle.propTypes = {
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  extraContent: PropTypes.element
};

RightSection.propTypes = {
  rightIcon: PropTypes.element,
  rightText: PropTypes.string,
  rightOnPress: PropTypes.func,
  rightSecond: PropTypes.element,
  rightSecondPress: PropTypes.func
};

CustomHeader.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  rightText: PropTypes.string,
  leftOnPress: PropTypes.func,
  rightOnPress: PropTypes.func,
  rightSecond: PropTypes.element,
  rightSecondPress: PropTypes.func,
  customStyle: PropTypes.object,
  extraContent: PropTypes.element
};

export default forwardRef(CustomHeader);
