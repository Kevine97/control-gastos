import { useState, useEffect } from "react";

const Filtros = ({filtros, setFiltros}) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="">Filtrar gastos</label>
          <select value={filtros} onChange={e => setFiltros(e.target.value)}>
            <option className="option" value="">--- Ver todas las categoria ---</option>
            <option className="option" value="ahorro">Ahorro</option>
            <option className="option" value="comida">Comida</option>
            <option className="option" value="casa">Casa</option>
            <option className="option" value="gastos">Gastos Varios</option>
            <option className="option" value="ocio">Ocio</option>
            <option className="option" value="suscripciones">Suscripciones</option>
            <option className="option" value="salud">Salud</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
