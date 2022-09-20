import React from "react";

import "./ListaSuspensa.css";

const ListaSuspensa = ({ label, itens, obrigatorio, valor, aoAlterado }) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        required={obrigatorio}
        value={valor}
        onChange={(e) => aoAlterado(e.target.value)}
      >
        <option value=""></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
