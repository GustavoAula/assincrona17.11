import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import PrimaryButton from "../components/PrimaryButton";

type RootStackParamList = {
  SignIn: undefined;
  Home: { username: string };
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ route, navigation }: Props) {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Olá, {username}!</Text>
      <Text style={styles.info}>Você está na nova tela inicial</Text>

      <PrimaryButton text="Sair" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: { fontSize: 28, fontWeight: "700", marginBottom: 10, color: "#222" },
  info: { fontSize: 16, marginBottom: 25, color: "#666" },
});
