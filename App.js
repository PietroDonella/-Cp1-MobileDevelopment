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
import Cadastro from "./src/screens/Cadastro";

export default function App() {
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
    <Cadastro/>
  );
}
