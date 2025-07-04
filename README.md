This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
# JunoMarketDemo

## Features Implemented (per requirements)

- **Login Screen:**
  - Simple login form. Navigates to Home screen after successful login.
- **Home Screen:**
  - Displays a list of products fetched from a public API.
  - Shows basic details for each item (title, price, thumbnail, etc.).
- **Detail Screen:**
  - Navigates to a detail screen showing more information when an item is selected.
- **State Management:**
  - Uses Redux Toolkit for managing application state (products, auth, product details).
- **Network Requests:**
  - Uses Axios for all API requests.
- **Navigation:**
  - Implements stack navigation using React Navigation v6.
- **Testing:**
  - Unit tests for components using Jest and React Native Testing Library (see `src/shared/components/__tests__`).
- **Codebase Structure:**
  - Modular, maintainable folder structure with clear separation of features, shared components, and core logic.
- **Comments:**
  - Key files and logic are commented for clarity.
- **Git:**
  - Project uses Git for version control with a clear, descriptive commit history.

## Additional Features (beyond requirements)

- **Pagination:**
  - Home screen supports infinite scroll/pagination for product list.
- **Image Caching:**
  - All images use `react-native-fast-image` for aggressive caching and smooth performance.
  - A common `AppImage` component wraps FastImage for consistent usage.
- **StatusBar Styling:**
  - Custom header ensures status bar matches header color and style on both iOS and Android.
- **TypeScript:**
  - Full type safety across the codebase for components, navigation, and Redux state.
- **Reusable Components:**
  - Shared UI components (Button, Spinner, CustomHeader, ProductCard, etc.) for consistency and maintainability.
- **Error Handling:**
  - User-friendly error messages for network/API errors.
- **Loading States:**
  - Spinners and loading indicators for all async actions (initial load, pull-to-refresh, pagination, detail fetch).
- **Platform Awareness:**
  - Platform-specific constants and UI tweaks for iOS/Android.

## Project Structure (Current)

```
src/
  features/
    auth/
      components/    # Reusable components specific to auth feature
      screens/
        login/
          LoginScreen.tsx
          loginScreen.styles.ts
          loginScreen.types.ts
    home/
      components/    # Reusable components specific to home feature
      screens/
        home/
          HomeScreen.tsx
          homeScreen.styles.ts
          homeScreen.types.ts
    detail/
      components/    # Reusable components specific to detail feature
      screens/
        detail/
          DetailScreen.tsx
          detailScreen.styles.ts
          detailScreen.types.ts
  shared/
    components/     # Reusable UI components (Button, Spinner, CustomHeader, etc.)
    constants/      # Shared constants (layout, platform, etc.)
    hooks/          # Reusable custom hooks
    utils/          # Utility functions
    styles/         # Shared/global style files
  core/
    api/            # API logic (Axios/fetch)
    config/         # App configuration
    store/
      slices/       # Redux Toolkit slices (e.g., authSlice)
      hooks.ts      # Typed Redux hooks
      store.ts      # Redux store setup
    types/          # Global TypeScript types
  navigation/       # App navigation setup (e.g., AppNavigator.tsx)
App.tsx             # Entry point
```

- Each screen (e.g., Login, Home, Detail) is in its own folder inside the relevant feature's screens directory, with colocated styles and types files.
- Each feature can have its own components folder for feature-specific reusable components.
- Shared logic and reusable components are organized under `shared/`.
- App-wide logic (api, config, store, types) is under `core/`.
- Navigation setup is in `navigation/`.

## Demo Credentials

- **Username:** junomarket
- **Password:** 12345678
