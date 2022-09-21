import React, { useState, useContext } from "react";

import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import { Button, TextField } from "@mui/material";
import useErros from "../../hooks/useErros";

const DadosUsuario = ({ aoEnviar }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        id="email"
        label="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        name="senha"
        label="Senha"
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        required
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        type="password"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained">
        Próximo
      </Button>
    </form>
  );
};

export default DadosUsuario;
