import React, { useContext, useState } from "react";

import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";
import useErros from "../../hooks/useErros";

const DadosPessoais = ({ aoEnviar }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [novidades, setNovidades] = useState(true);
  const [promocoes, setPromocoes] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        margin="normal"
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        fullWidth
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      ></TextField>
      <TextField
        id="sobrenome"
        label="Sobrenome"
        margin="normal"
        fullWidth
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
      ></TextField>
      <TextField
        id="cpf"
        name="cpf"
        label="CPF"
        margin="normal"
        fullWidth
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      ></TextField>

      <FormControlLabel
        control={
          <Switch
            name="novidades"
            checked={novidades}
            onChange={(e) => setNovidades(e.target.checked)}
          ></Switch>
        }
        label="Novidades"
      ></FormControlLabel>

      <FormControlLabel
        control={
          <Switch
            name="promoçoes"
            checked={promocoes}
            onChange={(e) => setPromocoes(e.target.checked)}
          ></Switch>
        }
        label="Promoções"
      ></FormControlLabel>

      <Button type="submit" variant="contained">
        Próximo
      </Button>
    </form>
  );
};

export default DadosPessoais;
