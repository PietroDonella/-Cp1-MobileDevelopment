import { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import MaskInput, { Masks } from "react-native-mask-input";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [formCPF, setFormCPF] = useState("");
  const [telefone, setTelefone] = useState("");
  const [curso, setCurso] = useState("");

  useEffect(() => {
    const carregarDados = async () => {
      const valor = await AsyncStorage.getItem("@dados_usuario");
      if (valor !== null) {
        const dados = JSON.parse(valor);
        setNome(dados.nome || "");
        setFormCPF(dados.cpf || "");
        setTelefone(dados.telefone || "");
        setCurso(dados.curso || "");
      }
    };
    carregarDados();
  }, []);

  const salvarEAvancar = async () => {
    if (!nome || !formCPF || !telefone || !curso) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    const dados = { nome, cpf: formCPF, telefone, curso };

    await AsyncStorage.setItem("@dados_usuario", JSON.stringify(dados));

    navigation.navigate("Perfil", { user: dados });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Usuário</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome completo"
      />

      <Text style={styles.label}>CPF:</Text>
      <MaskInput
        style={styles.input}
        value={formCPF}
        onChangeText={setFormCPF}
        mask={Masks.BRL_CPF}
        placeholder="000.000.000-00"
        placeholderTextColor="#484f58"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Telefone:</Text>
      <MaskInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        mask={Masks.BRL_PHONE}
        placeholder="(00) 00000-0000"
        placeholderTextColor="#484f58"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Curso:</Text>
      <TextInput
        style={styles.input}
        value={curso}
        onChangeText={setCurso}
        placeholder="Seu curso"
      />

      <Button
        title="Salvar e Ver Perfil"
        onPress={salvarEAvancar}
        color="#000212"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#c7f7c3",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000212",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
  },
});
