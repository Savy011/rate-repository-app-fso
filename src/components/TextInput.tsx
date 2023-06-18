import React from 'react';
import {
  TextInput as NativeTextInput,
  StyleSheet,
  TextInputProps
} from 'react-native';

interface Props extends TextInputProps {
  error?: string | false;
}

const styles = StyleSheet.create({});

const TextInput: React.FunctionComponent<Props> = ({
  style,
  error,
  ...props
}) => {
  const textInputStyle = [style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
