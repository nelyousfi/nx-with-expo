import type { ExpoConfig } from 'expo/config';

const plugin = (config: ExpoConfig) => {
  console.log('hello from the custom expo plugin');
  return config;
};

export = plugin;
