import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export const useHandleFormSubmit = () => {
  const navigation = useNavigation();

  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleFormSubmit = async ({
    values,
    navigationRoute,
    apiCallback,
    acceptedResponseStatusCode,
  }) => {
    setShowToast(true);
    setIsLoading(true);
    try {
      const response = await apiCallback(values);
      if (response.status !== acceptedResponseStatusCode) throw Error;

      setIsLoading(false);
      setSuccess(true);

      setTimeout(() => {
        navigation.navigate(navigationRoute);
      }, 1600);
    } catch {
      setIsLoading(false);
      setError(true);
    } finally {
      setTimeout(() => {
        setShowToast(false);
        setSuccess(false);
        setError(false);
      }, 1200);
    }
  };
  return { handleFormSubmit, isLoading, error, showToast, success };
};
