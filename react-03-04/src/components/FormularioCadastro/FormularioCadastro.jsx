import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";

const FormularioCadastro = ({ aoEnviar }) => {
  const [etapa, setEtapa] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapa === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const proximo = () => {
    setEtapa(etapa + 1);
  };

  const coletarDados = (dados) => {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  };

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado Pelo Cadastro!</Typography>,
  ];

  return (
    <>
      <Stepper activeStep={etapa}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapa]}
    </>
  );
};

export default FormularioCadastro;
