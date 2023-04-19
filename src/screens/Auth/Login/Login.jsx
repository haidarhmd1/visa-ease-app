import React, { useState } from 'react';

import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { Background, Logo } from 'components/Login';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { styles } from 'screens/Auth/Login/Login.styled';
import { HelperText, IconButton } from 'react-native-paper';
import { ROUTES } from 'res/constants/routes';
import { useAuthenticationStore } from 'store/zustand';
import { login } from 'network/api';
import { LoginIllustration } from 'assets/illustrations';
import { Image } from 'expo-image';
import { useForm } from 'react-hook-form';
import { CustomTextInput } from 'components/general/CustomFormElements/CustomFormElements';
import { blurhash } from 'res/constants/global';
import { TextInput } from 'react-native-paper';

const LoginRaw = ({ navigation }) => {
  const userAuth = useAuthenticationStore(state => state.userAuth);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

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

  console.log(errors);

  const [errorMessage, setErrorMessage] = useState({});

  const onSubmit = async values => {
    try {
      const { email, password } = values;
      const response = await login({ email, password });
      if (response.status !== 200) {
        setErrorMessage({
          errStatus: response.status,
          errMsg: response.data.message,
        });
        throw Error;
      }
      userAuth(response.data.id, true);
    } catch (error) {
      console.log(error);
    }
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
        <HelperText type="error">{errorMessage.errMsg}</HelperText>
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
