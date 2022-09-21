import React, { useState } from "react";

import { Button, TextField } from "@mui/material";

const DadosEntrega = ({ aoEnviar }) => {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        type="number"
        margin="normal"
        fullWidth
      />
      <TextField
        id="endereco"
        label="Endereço"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        type="text"
        margin="normal"
        fullWidth
      />
      <TextField
        id="numero"
        label="Número"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        type="number"
        margin="normal"
        fullWidth
      />
      <TextField
        id="estado"
        label="Estado"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        type="text"
        margin="normal"
        fullWidth
      />
      <TextField
        id="cidade"
        label="Cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        type="text"
        margin="normal"
        fullWidth
      />

      <Button type="submit" variant="contained" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
};

export default DadosEntrega;
