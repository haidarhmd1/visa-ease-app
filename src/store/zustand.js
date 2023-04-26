import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';
import omit from 'lodash-es/omit';
import { USER_TOKEN } from 'res/constants/global';

const initialUser = {
  toke: null,
  id: '',
  email: '',
  fullname: '',
  isLoggedIn: false,
};

export const useAuthStore = create(set => ({
  user: initialUser,
  signIn: user => set(() => ({ user })),
  signOut: () => {
    SecureStore.deleteItemAsync(USER_TOKEN)
      .then(() => {
        set(() => ({ user: initialUser }));
      })
      .catch(error => console.error(error));
  },
}));
