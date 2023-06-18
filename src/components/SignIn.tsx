import { View, StyleSheet, Pressable } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';
import Text from './Text';

const initialValues = {
  username: '',
  password: ''
};

const FormikForm = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Log-In</Text>
      </Pressable>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(8, 'Username must be atleast 8 characters long')
    .required('Username is required'),
  password: yup
    .string()
    .length(8, 'Password Must be 8 Characters Long')
    .required('Password is required')
});

const SignIn = () => {
  const onSubmit = () => {
    console.log('Button Pressed');
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange
      >
        {({ handleSubmit }: { handleSubmit: () => void }) => (
          <FormikForm onSubmit={handleSubmit} />
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 15,
    margin: 10,
    padding: 15
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.subheading,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    margin: 15,
    padding: 15
  }
});

export default SignIn;
