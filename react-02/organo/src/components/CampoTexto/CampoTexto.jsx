import React from "react";

import "./CampoTexto.css";

const CampoTexto = ({ label, placeholder, obrigatorio, valor, aoAlterado }) => {
  const aoDigitado = (e) => {
    aoAlterado(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CampoTexto;
