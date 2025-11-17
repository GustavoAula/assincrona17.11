import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import PrimaryButton from "../components/PrimaryButton";

type RootStackParamList = {
  SignIn: undefined;
  Home: { username: string };
};

type Props = NativeStackScreenProps<RootStackParamList, "SignIn">;

export default function SignIn({ navigation }: Props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function handleLogin() {
    if (!user.trim() || !pass.trim()) {
      alert("Preencha todos os campos!");
      return;
    }
    navigation.navigate("Home", { username: user });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a)</Text>
      <Text style={styles.subtitle}>Acesse sua conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#777"
        value={user}
        onChangeText={setUser}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#777"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
      />

      <PrimaryButton text="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f1f7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: { fontSize: 32, fontWeight: "700", marginBottom: 5, color: "#2a2a2a" },
  subtitle: { fontSize: 16, marginBottom: 25, color: "#555" },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
