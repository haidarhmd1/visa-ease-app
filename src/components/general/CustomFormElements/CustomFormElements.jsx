import { View } from 'react-native';
import { Controller } from 'react-hook-form';
import { StyledTextInput } from 'components/general/Form';
import React from 'react';
import { MyTheme } from 'styles/theme/theme.extended';
import { styles } from 'screens/Visa/Visa.styled';
import { Dropdown } from 'react-native-element-dropdown';

export const CustomTextInput = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  rules = {},
  left,
  right,
  style,
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
          <StyledTextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            label={placeholder}
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
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange, onBlur, onFocus, value },
        fieldState: { error },
      }) => (
        <Dropdown
          disable={disabled}
          style={[
            styles.dropdown,
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
          search
          placeholder={!onFocus ? selectPlaceholder : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={onFocus}
          onBlur={onFocus}
          onChange={onChange}
        />
      )}
    />
  );
};
