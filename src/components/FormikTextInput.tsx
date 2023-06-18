import { StyleSheet } from 'react-native';
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
  errorText: {
    marginTop: 5
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

  return (
    <>
      <TextInput
        style={styles.Input}
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
