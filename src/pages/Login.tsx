import React, { useState, FC } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  Image,
  Platform
} from "react-native";
import InputEmail from "../components/InputEmail";
import Input from "../components/Input";
import Button from "../components/Button";

const logo = require("../assets/logo.png");

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [techs, setTechs] = useState("");
  async function handleSubmit() {
    debugger;
    console.log({ email, techs });
  }
  return (
    <KeyboardAvoidingView
      // enabled={Platform.OS === "ios"}
      behavior="padding"
      style={styles.container}
    >
      <Image source={logo} />
      <View style={styles.form}>
        <Text style={styles.label}>Seu email *</Text>
        <InputEmail onChangeText={setEmail} value={email} />
        <Text style={styles.label}>Tecnologias *</Text>
        <Input
          placeholder="Tecnologias de seu interesse"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />
        <Button onPress={handleSubmit}>Encontrar spots</Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8,
    textTransform: "uppercase"
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30
  }
});

export default Login;
