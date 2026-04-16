import { View, Text, StyleSheet, Image } from "react-native";

export default function Perfil({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.identificacao}>
        <Image source={require("../../assets/eu.jpg")} style={styles.foto} />
        <Text style={styles.textoFixo}>Aluno: Pietro Donella Salomão</Text>
        <Text style={styles.textoFixo}>RM: 561722</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Dados Cadastrados:</Text>
        <Text style={styles.info}>Nome: {user.nome}</Text>
        <Text style={styles.info}>CPF: {user.cpf}</Text>
        <Text style={styles.info}>Telefone: {user.telefone}</Text>
        <Text style={styles.info}>Curso: {user.curso}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#c7f7c3",
    alignItems: "center",
  },
  identificacao: { marginBottom: 30, alignItems: "center" },
  foto: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  textoFixo: { fontSize: 18, fontWeight: "bold", color: "#000212" },
  card: {
    backgroundColor: "#000212",
    padding: 20,
    borderRadius: 10,
    width: "100%",
  },
  cardTitulo: {
    color: "#c7f7c3",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: { color: "white", fontSize: 16, marginBottom: 5 },
});
