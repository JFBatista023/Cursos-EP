import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import "@fontsource/roboto/400.css";

import { Container, Typography } from "@mui/material";
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  aoEnviar(dados) {
    console.log(dados);
  }

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" component="h1">
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{
            cpf: validarCPF,
            senha: validarSenha,
            nome: validarSenha,
          }}
        >
          <FormularioCadastro aoEnviar={this.aoEnviar} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

export default App;
