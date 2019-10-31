import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

const Input: React.FC<TextInputProps> = props => {
  return (
    <TextInput style={styles.input} placeholderTextColor="#999" {...props} />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingHorizontal: 20,
    borderColor: "#ddd",
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  }
});

export default Input;
