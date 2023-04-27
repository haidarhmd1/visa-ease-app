import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { verifyToken } from 'network/api';
import { USER_DATA } from 'res/constants/global';
import * as SecureStore from 'expo-secure-store';
import { initialUser } from 'store/zustand';

export const useVerifyToken = () => {
  const [userData, setUserData] = useState(initialUser);

  useEffect(() => {
    if (userData.isLoggedIn) return;

    SecureStore.getItemAsync(USER_DATA)
      .then(response => {
        setUserData(JSON.parse(response));
      })
      .catch(() => {});
  }, [userData]);

  const { data, isLoading, isError } = useQuery(
    'validateToken',
    () => {
      if (!userData.token) {
        throw new Error('No token found');
      }
      return verifyToken(userData.token);
    },
    {
      enabled: !!userData.token,
      retry: false,
    }
  );
  return {
    isLoading,
    isError,
    isTokenVerified: data?.status === 200,
    token: userData.token,
    userData,
  };
};
