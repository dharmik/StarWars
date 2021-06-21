import { Root } from 'native-base';
import React from 'react';
import { Appearance, StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from '../navigation';
import { ApplicationStyles } from '../theme';

const RootContainer = () => {
  const theme = Appearance.getColorScheme();
  return (
    <Root>
      <SafeAreaProvider>
        <View style={ApplicationStyles.screen.mainContainer}>
          <StatusBar
            barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
            backgroundColor={theme === 'dark' ? 'black' : 'white'}
          />
          <Navigation />
        </View>
      </SafeAreaProvider>
    </Root>
  );
};

export default RootContainer;
