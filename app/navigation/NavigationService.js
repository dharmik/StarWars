import { StackActions } from '@react-navigation/native';
import { createRef } from 'react';
import { Strings, Utils } from '../constants';

export const navigationRef = createRef();

const navigate = (stack, params) => {
  if (navigationRef.current) {
    return navigationRef.current.navigate(stack.name, {
      screen: stack.screen,
      params
    });
  } else {
    Utils.showToastMsg(`${stack.screen} ${Strings.navigationError}`);
  }
};

const reset = (stackName, screenName, detailScreen, params) => {
  if (navigationRef.current) {
    return navigationRef.current.reset({
      index: 0,
      routes: [
        {
          name: stackName,
          state: {
            routes: [
              {
                name: screenName,
                params,
                state: {
                  routes: [
                    {
                      name: detailScreen,
                      params
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    });
  } else {
    Utils.showToastMsg(`${screenName} ${Strings.navigationError}`);
  }
};

// Pop Back to specific number of Stack
const popBack = (popStackNumber = 1) =>
  navigationRef.current.dispatch(StackActions.pop(popStackNumber));

// PopBack to Top of the Stack
const popToTop = () => navigationRef.current.dispatch(StackActions.popToTop());

function goBack() {
  navigationRef.current.goBack();
}

const replace = (name, params) =>
  navigationRef.current?.dispatch(StackActions.replace(name, params));

export default {
  navigate,
  reset,
  popBack,
  popToTop,
  goBack,
  replace
};
