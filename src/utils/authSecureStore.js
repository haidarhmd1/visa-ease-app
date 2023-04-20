import * as SecureStore from 'expo-secure-store';

export const saveAuthTokenKey = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};
export const getSecureAuthTokenValue = async key => {
  const result = await SecureStore.getItemAsync(key);
  return result || false;
};
