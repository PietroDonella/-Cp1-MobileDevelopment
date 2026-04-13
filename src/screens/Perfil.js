import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Perfil() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerForm}>
          {enviar && (
            <View style={styles.cardContainer}>
              <Text style={styles.cardTitulo}>Dados Cadastrados:</Text>
              <Text style={styles.cardTexto}>Nome: {nome}</Text>
              <Text style={styles.cardTexto}>Curso: {curso}</Text>
              <Text style={styles.cardTexto}>Disciplina: {disciplina}</Text>
              <Text style={styles.cardTexto}>Descrição: {descricao}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#000212",
    borderRadius: 10,
  },
  cardTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#c7f7c3",
    marginBottom: 10,
    textAlign: "center",
  },
  cardTexto: {
    fontSize: 14,
    color: "white",
    marginBottom: 5,
  },
});
