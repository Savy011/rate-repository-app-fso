import { View, StyleSheet, Pressable } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
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

const SignIn = () => {
  const onSubmit = () => {
    console.log('Button Pressed');
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
