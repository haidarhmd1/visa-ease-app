import React, { useEffect } from 'react';
import { PrimaryButton } from 'components/general/Buttons';
import { getCityofCountry, updateUser } from 'network/api';
import { Divider, Text } from 'react-native-paper';
import {
  Layout,
  Spacer,
  StyledScrollView,
} from 'components/general/Layout/Layout';
import {
  CustomDatePicker,
  CustomDropdown,
  CustomTextInput,
} from 'components/general/CustomFormElements/CustomFormElements';
import { getCountryDropdown } from 'utils/countryList';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { ErrorCard } from 'components/ErrorCard';
import { yupResolver } from '@hookform/resolvers/yup';
import { useIntl } from 'react-intl';
import moment from 'moment';
import { useUserStore } from 'store/zustand';
import { AppHeader } from 'components/general/AppHeader';
import { StyledTextInput } from 'components/general/Form';
import { StyleSheet, View } from 'react-native';
import { useGeneralInformation } from './GeneralInformation.schema';

export const GeneralInformation = ({ navigation }) => {
  const queryClient = useQueryClient();
  const intl = useIntl();
  const userInfo = useUserStore();
  const { schema } = useGeneralInformation();

  const { mutate, isLoading: isRegisterLoading, isError, error } = useMutation({
    mutationFn: data => updateUser(data),
    onSuccess: () => {},
    onError: regError => {
      console.log('error', regError);
    },
  });

  const defaultValues = {
    fullname: userInfo.userData.fullname,
    gender: userInfo.userData.gender,
    maritalStatus: userInfo.userData.maritalStatus,
    dob: moment(userInfo.userData.dob).toDate(),
    profession: userInfo.userData.profession,
    phone: userInfo.userData.phone,
  };

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    queryClient.invalidateQueries('getUser');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = data => {
    // const formData = {
    //   fullname: data.fullname,
    //   dob: data.dob,
    //   gender: data.gender.value,
    //   maritalStatus: data.maritalStatus.value,
    //   phone: data.phone,
    //   profession: data.profession,
    // };
    // mutate(formData);
    console.log('data', data);
  };

  return (
    <View
      style={{
        paddingBottom: 48,
      }}
    >
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="General Information"
      />
      <StyledScrollView style={{ backgroundColor: 'white' }}>
        <Layout>
          <View>
            <View>
              <Text variant="lableLarge">
                {intl.formatMessage({
                  id: 'register.title.personalInformation',
                })}
              </Text>
              <Spacer />
              <View style={[style.inputWidth, style.marginBottom]}>
                <CustomTextInput
                  disabled
                  control={control}
                  rules={{ required: true }}
                  name="fullname"
                  autoCorrect={false}
                  placeholder={`${intl.formatMessage({
                    id: 'register.form.fullname',
                  })}*`}
                />
              </View>

              <View style={[style.inputWidth, style.marginBottom]}>
                <CustomDatePicker
                  control={control}
                  name="dob"
                  placeholder={`${intl.formatMessage({
                    id: 'register.form.dob',
                  })}*`}
                />
              </View>

              <View style={[style.inputWidth, style.marginBottom]}>
                <Text variant="labelMedium">{`${intl.formatMessage({
                  id: 'register.form.gender',
                })}*`}</Text>
                <CustomDropdown
                  name="gender"
                  rules={{ required: true }}
                  control={control}
                  selectPlaceholder={`${intl.formatMessage({
                    id: 'register.form.gender',
                  })}*`}
                  data={[
                    {
                      label: intl.formatMessage({
                        id: 'registration.form.gender.male',
                      }),
                      value: 'MALE',
                    },
                    {
                      label: intl.formatMessage({
                        id: 'registration.form.gender.female',
                      }),
                      value: 'FEMALE',
                    },
                  ]}
                />
              </View>

              <View style={[style.inputWidth, style.marginBottom]}>
                <Text variant="labelMedium">{`${intl.formatMessage({
                  id: 'register.form.nationality',
                })}*`}</Text>
                <StyledTextInput
                  disabled
                  placeholder={userInfo.userData.nationality}
                />
              </View>

              <View style={[style.inputWidth, style.marginBottom]}>
                <Text variant="labelMedium">{`${intl.formatMessage({
                  id: 'register.form.maritalStatus',
                })}*`}</Text>

                <CustomDropdown
                  name="maritalStatus"
                  rules={{ required: true }}
                  control={control}
                  selectPlaceholder={`${intl.formatMessage({
                    id: 'register.form.maritalStatus',
                  })}*`}
                  data={[
                    {
                      label: intl.formatMessage({
                        id: 'registration.form.maritalStatus.single',
                      }),
                      value: 'SINGLE',
                    },
                    {
                      label: intl.formatMessage({
                        id: 'registration.form.maritalStatus.married',
                      }),
                      value: 'MARRIED',
                    },
                    {
                      label: intl.formatMessage({
                        id: 'registration.form.maritalStatus.widowed',
                      }),
                      value: 'WIDOWED',
                    },
                    {
                      label: intl.formatMessage({
                        id: 'registration.form.maritalStatus.divorced',
                      }),
                      value: 'DIVORCED',
                    },
                  ]}
                />
              </View>

              <View style={[style.inputWidth, style.marginBottom]}>
                <CustomTextInput
                  control={control}
                  rules={{ required: true }}
                  name="phone"
                  placeholder={`${intl.formatMessage({
                    id: 'register.form.phoneNumber',
                  })}*`}
                />
              </View>

              <View style={[style.inputWidth, style.marginBottom]}>
                <CustomTextInput
                  control={control}
                  rules={{ required: true }}
                  name="profession"
                  placeholder={`${intl.formatMessage({
                    id: 'register.form.profession',
                  })}*`}
                />
              </View>
            </View>
            <Spacer />
            <Divider />
            <Spacer />
            <Spacer />
            <View>
              {isError && (
                <ErrorCard errMessage={error?.response.data.message} />
              )}
            </View>
            <View style={[style.inputWidth, style.marginBottom]}>
              <PrimaryButton
                isLoading={isRegisterLoading}
                onPress={handleSubmit(onSubmit)}
                style={{ marginBottom: 10 }}
              >
                {intl.formatMessage({
                  id: 'button.submit',
                })}
              </PrimaryButton>
            </View>
          </View>
        </Layout>
      </StyledScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  inputWidth: {
    width: '100%',
  },
  center: {
    alignSelf: 'center',
  },
  inputMarginBottom: {
    marginBottom: 8,
  },
  marginBottom: {
    marginBottom: 16,
  },
});
