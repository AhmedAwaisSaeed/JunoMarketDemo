import React from 'react';
import FastImage from 'react-native-fast-image';

interface AppImageProps {
  source: {
    uri: string;
    headers?: Record<string, string>;
  } | number;
  style?: any;
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
  priority?: 'low' | 'normal' | 'high';
  cache?: 'immutable' | 'web' | 'cacheOnly';
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
  onLoad?: (event: any) => void;
  onError?: () => void;
  onProgress?: (event: any) => void;
  fallback?: boolean;
  defaultSource?: number;
  tintColor?: string;
}

const AppImage: React.FC<AppImageProps> = ({
  source,
  style,
  resizeMode = 'cover',
  priority = 'normal',
  cache = 'immutable',
  ...props
}) => {
  const getResizeMode = () => {
    switch (resizeMode) {
      case 'contain':
        return FastImage.resizeMode.contain;
      case 'cover':
        return FastImage.resizeMode.cover;
      case 'stretch':
        return FastImage.resizeMode.stretch;
      case 'center':
        return FastImage.resizeMode.center;
      default:
        return FastImage.resizeMode.cover;
    }
  };

  const getPriority = () => {
    switch (priority) {
      case 'low':
        return FastImage.priority.low;
      case 'normal':
        return FastImage.priority.normal;
      case 'high':
        return FastImage.priority.high;
      default:
        return FastImage.priority.normal;
    }
  };

  const getCache = () => {
    switch (cache) {
      case 'immutable':
        return FastImage.cacheControl.immutable;
      case 'web':
        return FastImage.cacheControl.web;
      case 'cacheOnly':
        return FastImage.cacheControl.cacheOnly;
      default:
        return FastImage.cacheControl.immutable;
    }
  };

  const fastImageSource = typeof source === 'number' 
    ? source 
    : {
        uri: source.uri,
        headers: source.headers,
        priority: getPriority(),
        cache: getCache(),
      };

  return (
    <FastImage
      source={fastImageSource}
      style={style}
      resizeMode={getResizeMode()}
      {...props}
    />
  );
};

export default AppImage; 