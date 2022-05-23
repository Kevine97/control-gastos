import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
  gastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setisValidPresupuesto,
  gastado,
  setGastado,
  porcentaje,
  setporcentaje,
  disponible,
  setDisponible,
  setGatos
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValidPresupuesto ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          gastos={gastos}
          disponible={disponible}
          setDisponible={setDisponible}
          gastado={gastado}
          setGastado={setGastado}
          porcentaje={porcentaje}
          setporcentaje={setporcentaje}
          setGatos={setGatos}
          setPresupuesto={setPresupuesto}
          setisValidPresupuesto={setisValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setisValidPresupuesto={setisValidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
