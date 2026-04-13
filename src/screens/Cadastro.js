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

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [descricao, setDescricao] = useState("");

  const [enviar, setEnviar] = useState(false);

  useEffect(() => {
    console.log("CP2 - Pronto para uso.");
  }, []);

  const gerenciarEnvio = () => {
    setEnviar(true);
  };

  const reiniciarFormulario = () => {
    setNome("");
    setCurso("");
    setDisciplina("");
    setDescricao("");
    setEnviar(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerForm}>
          <Text style={styles.titulo}>CP 1 - Mobile Dev</Text>

          <Text style={styles.label}>Nome: </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Curso: </Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Administração"
            value={curso}
            onChangeText={setCurso}
          />

          <Text style={styles.label}>Disciplina: </Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Economia"
            value={disciplina}
            onChangeText={setDisciplina}
          />

          <Text style={styles.label}>Apresentação: </Text>
          <TextInput
            style={styles.input}
            placeholder="Nos conte mais sobre você."
            multiline={true}
            numberOfLines={3}
            value={descricao}
            onChangeText={setDescricao}
            submitBehavior="blurAndSubmit"
            returnKeyType="done"
          />

          <Button title="Finalizar" onPress={gerenciarEnvio} color="#000212" />

          <View style={{ marginTop: 15 }}>
            <Button
              title="Reiniciar"
              onPress={reiniciarFormulario}
              color="red"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c7f7c3",
    paddingHorizontal: 20,
  },
  containerForm: {
    marginBottom: 20,
    width: "100%",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "900",
    color: "#000212",
    textAlign: "center",
    marginVertical: 40,
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    fontSize: 17,
    borderWidth: 3,
    borderColor: "#000212",
    marginBottom: 25,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000212",
  },
});
