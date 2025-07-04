import { Platform } from 'react-native';

/**
 * Platform specific constants and checks
 */

export const IS_IOS: boolean = Platform.OS === 'ios';
export const IS_ANDROID: boolean = Platform.OS === 'android';

// Platform version numbers
let version: string;
if (typeof Platform.Version === 'string') {
  version = Platform.Version;
} else if (typeof Platform.Version === 'number') {
  version = Platform.Version.toString();
} else {
  // fallback for test environments
  version = '0';
}
export const OS_VERSION: string = version;
export const OS_MAJOR_VERSION: number = parseInt(OS_VERSION, 10);

// Platform specific features
export const HAS_NOTCH: boolean = IS_IOS && OS_MAJOR_VERSION >= 11;

// Platform specific UI constants
export const PLATFORM = {
  SELECT: (config: { ios: any; android: any; default?: any }) => {
    if (IS_IOS) {return config.ios;}
    if (IS_ANDROID) {return config.android;}
    return config.default ?? config.ios;
  },

  // Common platform-specific values
  HEADER_HEIGHT: IS_IOS ? 44 : 56,
  STATUS_BAR_HEIGHT: IS_IOS ? 20 : 24,
  BOTTOM_TAB_HEIGHT: IS_IOS ? 49 : 56,

  // Animation timing
  ANIMATION_DURATION: IS_IOS ? 300 : 250,
} as const;
