import React, { useEffect, useState } from 'react';

import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { Background, Logo } from 'components/Login';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { styles } from 'screens/Auth/Login/Login.styled';
import { ROUTES } from 'res/constants/routes';
import { login } from 'network/api';
import { LoginIllustration } from 'assets/illustrations';
import { Image } from 'expo-image';
import { useForm } from 'react-hook-form';
import { CustomTextInput } from 'components/general/CustomFormElements/CustomFormElements';
import { useMutation } from 'react-query';
import { useAuthStore } from 'store/zustand';
import { blurhash } from 'res/constants/global';
import { ErrorCard } from 'components/ErrorCard';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextInput } from 'react-native-paper';
import { useIntl } from 'react-intl';
import { useLoginSchema } from './Login.schema';

const LoginRaw = ({ navigation }) => {
  const { formatMessage } = useIntl();
  const { loginSchema } = useLoginSchema();
  const signIn = useAuthStore(state => state.signIn);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const { mutate, isLoading, error, isError } = useMutation(login, {
    onSuccess: data => {
      signIn({
        token: data.data.token,
        isLoggedIn: true,
      });
    },
    onError: loginError => {
      if (
        loginError.response.data.message !==
        'You must confirm your email in order to sign in'
      ) {
        return;
      }
      navigation.navigate(ROUTES.ENTER_OTP, {
        userId: loginError.response.data.userId,
      });
    },
  });

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    enableReinitialize: true,
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    reset({ email: '', password: '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = values => {
    mutate(values);
  };

  return (
    <Background>
      <View style={styles.centerItems}>
        <Logo />
        <Image
          style={styles.image}
          source={LoginIllustration}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>
      <View style={styles.formWrapper}>
        {isError && <ErrorCard errMessage={error?.response.data.message} />}
        <View>
          <View style={[styles.inputWidth, styles.marginBottom]}>
            <CustomTextInput
              name="email"
              placeholder={formatMessage({
                id: 'login.input.email.placeholder',
              })}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="email"
              rules={{ required: true }}
              control={control}
              left={<TextInput.Icon icon="account-circle-outline" />}
            />
          </View>

          <View style={[styles.inputWidth, styles.marginBottom]}>
            <CustomTextInput
              name="password"
              placeholder={formatMessage({
                id: 'login.input.password.placeholder',
              })}
              control={control}
              secureTextEntry={isPasswordSecure}
              rules={{ required: true }}
              left={<TextInput.Icon icon="form-textbox-password" />}
              right={
                <TextInput.Icon
                  icon="eye"
                  onPress={() => setIsPasswordSecure(!isPasswordSecure)}
                />
              }
            />
          </View>

          <TouchableWithoutFeedback>
            <Text
              style={styles.forgotPasswordButton}
              onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}
            >
              {formatMessage({ id: 'button.forgotPassword' })}
            </Text>
          </TouchableWithoutFeedback>

          <PrimaryButton
            loading={isLoading}
            style={[styles.buttonWidth, styles.marginBottom]}
            mode="contained"
            disabled={errors.password || errors.email}
            onPress={handleSubmit(onSubmit)}
          >
            {formatMessage({ id: 'button.login' })}
          </PrimaryButton>
          <SecondaryButton
            style={styles.buttonWidth}
            mode="outlined"
            onPress={() => navigation.navigate(ROUTES.REGISTRATION)}
          >
            {formatMessage({ id: 'register.button' })}
          </SecondaryButton>
        </View>
      </View>
    </Background>
  );
};

export const Login = React.memo(LoginRaw);
