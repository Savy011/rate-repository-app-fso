import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  Input: {
    borderColor: theme.colors.textPrimary,
    borderRadius: 15,
    borderWidth: 1,
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 15
  },
  errorInput: {
    borderColor: theme.colors.error,
    color: theme.colors.error
  },
  errorText: {
    color: theme.colors.error,
    fontSize: theme.fontSizes.bodyTwo,
    marginHorizontal: 10
  }
});

const FormikTextInput = ({
  name,
  ...props
}: {
  name: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const formStyle: StyleProp<TextStyle> = [
    styles.Input,
    showError ? styles.errorInput : null
  ];

  return (
    <>
      <TextInput
        style={formStyle}
        onChangeText={(value: string) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
