import React, { useState } from 'react';

import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { Background, Logo } from 'components/Login';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { styles } from 'screens/Auth/Login/Login.styled';
import { HelperText, TextInput } from 'react-native-paper';
import { ROUTES } from 'res/constants/routes';
import { login } from 'network/api';
import { LoginIllustration } from 'assets/illustrations';
import { Image } from 'expo-image';
import { useForm } from 'react-hook-form';
import { CustomTextInput } from 'components/general/CustomFormElements/CustomFormElements';
import { USER_TOKEN, blurhash } from 'res/constants/global';
import { useMutation } from 'react-query';
import { useAuthStore } from 'store/zustand';
import { setAsyncStorageItem } from 'utils/authSecureStore';

const LoginRaw = ({ navigation }) => {
  const signIn = useAuthStore(state => state.signIn);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const { mutateAsync, isLoading, error, isError } = useMutation(login, {
    onSuccess: data => {
      setAsyncStorageItem(USER_TOKEN, data.data.token)
        .then(() => {
          signIn({
            token: data.data.token,
            id: data.data.user.id,
            email: data.data.user.email,
            fullname: data.data.user.fullname,
            isLoggedIn: true,
          });
        })
        .catch(asyncError => console.error(asyncError));
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    enableReinitialize: true,
  });

  const onSubmit = async values => {
    await mutateAsync(values);
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
        {isError && (
          <HelperText type="error">{error?.response.data.message}</HelperText>
        )}
        <View>
          <View style={[styles.inputWidth, styles.marginBottom]}>
            <CustomTextInput
              name="email"
              placeholder="Email"
              rules={{ required: true }}
              control={control}
              left={<TextInput.Icon icon="account-circle-outline" />}
            />
          </View>

          <View style={[styles.inputWidth, styles.marginBottom]}>
            <CustomTextInput
              name="password"
              placeholder="Password"
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
              Forgot Password ?
            </Text>
          </TouchableWithoutFeedback>

          <PrimaryButton
            loading={isLoading}
            style={[styles.buttonWidth, styles.marginBottom]}
            mode="contained"
            disabled={errors.password || errors.email}
            onPress={handleSubmit(onSubmit)}
          >
            Login
          </PrimaryButton>
          <SecondaryButton
            style={styles.buttonWidth}
            mode="outlined"
            onPress={() => navigation.navigate(ROUTES.REGISTRATION)}
          >
            Sign Up
          </SecondaryButton>
        </View>
      </View>
    </Background>
  );
};

export const Login = React.memo(LoginRaw);
