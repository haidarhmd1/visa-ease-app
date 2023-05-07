import React from 'react';
import { View } from 'react-native';
import { Controller } from 'react-hook-form';
import { StyledTextInput } from 'components/general/Form';
import { MyTheme } from 'styles/theme/theme.extended';
import { styles } from 'screens/Visa/Visa.styled';
import { Dropdown } from 'react-native-element-dropdown';
import Checkbox from 'expo-checkbox';
import { HelperText, Text } from 'react-native-paper';

export const CustomTextInput = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  rules = {},
  left,
  right,
  style,
  label,
  ...properties
}) => {
  return (
    <View style={style}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View>
            <StyledTextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label={label || placeholder}
              placeholder={placeholder || label}
              name={name}
              outlineColor={
                error ? MyTheme.colors.error : MyTheme.colors.primaryBrand
              }
              mode="outlined"
              secureTextEntry={secureTextEntry}
              left={left}
              right={right}
              {...properties}
            />
            {error && (
              <HelperText type="error" visible={error}>
                {error?.message}
              </HelperText>
            )}
          </View>
        )}
      />
    </View>
  );
};

export const CustomDropdown = ({
  name,
  rules,
  control,
  selectPlaceholder,
  data,
  disabled = false,
  search = true,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange, onFocus, value },
        fieldState: { error },
      }) => (
        <View>
          <Dropdown
            disable={disabled}
            style={[
              styles.dropdown,
              error
                ? { borderColor: MyTheme.colors.error }
                : { borderColor: MyTheme.colors.primaryBrand },
              onFocus && { borderColor: MyTheme.colors.primaryBrand },
              disabled && { backgroundColor: '#f0f0f0' },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            search={search}
            placeholder={!onFocus ? selectPlaceholder : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={onFocus}
            onBlur={onFocus}
            onChange={onChange}
          />
          {error && (
            <HelperText type="error" visible={error}>
              {error?.message}
            </HelperText>
          )}
        </View>
      )}
    />
  );
};

export const CustomCheckbox = ({ name, control, rules = {}, title }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={false}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Checkbox
              value={value}
              onValueChange={onChange}
              style={{ marginRight: 8 }}
              color={value ? MyTheme.colors.primaryBrand : undefined}
            />
            <Text>{title}</Text>
          </View>
          {error && (
            <HelperText type="error" visible={error}>
              {error?.message}
            </HelperText>
          )}
        </View>
      )}
    />
  );
};
