import React from "react";

const semValidacao = (dados) => {
  return { valido: true, texto: "" };
};

const ValidacoesCadastro = React.createContext({
  cpf: semValidacao,
  senha: semValidacao,
  nome: semValidacao,
});

export default ValidacoesCadastro;
