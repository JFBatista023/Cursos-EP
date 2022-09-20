import React from "react";

import "./Botao.css";

const Botao = ({ children }) => {
  return <button className="botao">{children}</button>;
};

export default Botao;
