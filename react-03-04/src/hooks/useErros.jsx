import { useState } from "react";

const criarEstadoInicial = (validacoes) => {
  const estadoInicial = {};
  for (let campo in validacoes) {
    estadoInicial[campo] = { valido: true, texto: "" };
  }

  return estadoInicial;
};

const useErros = (validacoes) => {
  const estadoInicial = criarEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial);

  const possoEnviar = () => {
    let posso = true;
    for (let campo in erros) {
      if (!erros[campo].valido) {
        posso = false;
      }
    }
    return posso;
  };

  const validarCampos = (e) => {
    const { name, value } = e.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  };

  return [erros, validarCampos, possoEnviar];
};

export default useErros;
