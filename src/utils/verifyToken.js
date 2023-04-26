import * as SecureStore from 'expo-secure-store';

import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { verifyToken } from 'network/api';
import { useAuthStore } from 'store/zustand';
import { USER_TOKEN } from 'res/constants/global';

export const useVerifyToken = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (token) return;

    SecureStore.getItemAsync(USER_TOKEN)
      .then(response => {
        setToken(response);
      })
      .catch(error => console.error(error));
  }, [token]);

  const { data, isLoading, isError } = useQuery(
    'validateToken',
    () => {
      if (!token) {
        throw new Error('No token found');
      }
      return verifyToken(token);
    },
    {
      enabled: !!token,
      retry: false,
    }
  );

  console.log('data', data);
  return { isLoading, isError, data, token };
};
