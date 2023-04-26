import * as SecureStore from 'expo-secure-store';

// export const setAsyncStorageItem = async (key, value) => {
//   await SecureStore.setItemAsync(key, value);
// };
// export const getAsyncStorageItem = async key => {
//   const result = await SecureStore.getItemAsync(key);
//   return result || false;
// };

export async function setAsyncStorageItem(key, value) {
  await SecureStore.setItemAsync(key, value);
}
export async function getAsyncStorageItem(key) {
  const result = await SecureStore.getItemAsync(key);
  return result || false;
}
