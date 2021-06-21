# MobmaximeRN

The repository for StarWars.

**Product Flavors**:
*StarWars**: `com.starwars.app`

---

## Project Description

Description...

## Prerequisites

**iOS** : XCode(12.0.1) onwards

**Android** : Android Studio(4.0) with gradle(6.3) onwards

**Editor** : Visual Studio Code

## How to Setup Project

**Step 1:** Clone this repository.

**Step 2:** Go to the cloned repo and open it in termianl.

**Step 3:** Install the dependencies with `$ yarn`

**Step 4:** Run the yarn script to install the cocoapods `$ yarn podinstall`

## How to Run the Project

1. Open the project directory in to terminal
2. Run and build for either OS
   _ Run iOS app
   `yarn ios`
   _ Run Android app
   `yarn android` \* Note: This npm scripts will lint your code first. If there are no lint errors, then it will run the ios or android app. Otherwise it will show the lint errors in the terminal.

## Reusablity

- **How it can be reused?**
  - Clone the repository
  - Install [react-native-rename](https://www.npmjs.com/package/react-native-rename) as global dependency
- There are two bugs with this lib though.

  - If your old project name and new project name have same strings in them, it won't rename the ios .pbxproj, .xcodeproj and .xcworkspace files.
  - To overcome this, we can rename the project with a totally different name first and than can rename it with the actual name.

  ```bash
    first command: <project_root_directory>$react-native-rename "TestApp" -b com.mobmaxime.testapp

    second command: <project_root_directory>$react-native-rename "mobmaximeRN" -b com.mobmaxime.mobmaximern
  ```

## [Template generator](./Template.md)

- **Why generator?**
  - Generator will help us to save 5-15 minutes time when creating every module, screen, component, reducer, saga, service etc.

## Coding Style used

This project adheres to JavaScript Standard for codinng style. To maintain coding standards, utilising features of ES6 and follow best development practices of react-native, this project also uses [ES6](http://es6-features.org/#Constants), some rules of [eslint-airbnb](https://github.com/airbnb/javascript), [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and [eslint-plugin-react-native](https://github.com/intellicode/eslint-plugin-react-native).

**Do not disable lint inside the code. Try to understand the rule and then follow it into your code. Disabling lint will be considered a violation of coding standards. Exceptions will be allowed by the code-reviewer and team lead after understanding the need to ignore lint.**

1. **To Lint**

   Use the yarn script `lint` or 'fixcode'. To run it

```bash
  yarn lint
```

2. **Auto Lint on Commit**

   This is implemented using [husky](https://github.com/typicode/husky). So husky will prevent code-cmmits having lint errors. There is no additional setup needed.

3. **Understanding Linting Errors**

   The linting rules are from JS Standard and React-Standard. [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## Extra steps for android

- Mind the version of google services used in the project. All google services must have same version. This is implemented using project level build.gradle.

## Extra steps for ios

- You will need all the certificates to run the ios project in a real device.

## List of all dependencies used in the project with their usage

List all dependencies from the package.json file along with their usage. This list must be updated every time you change/add any dependecy. Here are some examples:

- **Framework:**

  - [React Native](https://github.com/facebook/react-native)

- **State management libraries:**

  - [Redux](http://redux.js.org/), [React Redux](https://react-redux.js.org/), [Rematch](https://github.com/rematch/rematch), [@react-native-community/netinfo](https://github.com/react-native-netinfo/react-native-netinfo)

- **API & Middleware libraries:**

  - [API Sauce](https://github.com/infinitered/apisauce)

- **Libraries used for navigation:**

  - ["@react-navigation/native, @react-navigation/stack](https://github.com/react-navigation/react-navigation), [@react-native-community/masked-view](https://github.com/react-native-community/react-native-masked-view), [react-native-screens](https://github.com/software-mansion/react-native-screens), [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler), [react-native-reanimated](https://github.com/kmagiera/react-native-reanimated)

- **Libraries used for forms and validations:**

  ```- [formik](https://jaredpalmer.com/formik/), [yup](https://github.com/jquense/yup)

- **Libraries used for UI:**
  -
[native-base](https://nativebase.io/), [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
  
- **Libraries used for storage:**
  ```- [async-storage](https://github.com/react-native-async-storage/async-storage)


## Troubleshoot Notes

- There are no known issues for run or build processes right now.

## Notes

- Release builds are distributed from develop-release branch and all pull requests are done to develop branch.
