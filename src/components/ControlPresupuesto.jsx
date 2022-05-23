import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { formatearCantidad, porcentajeTotal } from "../Helpers";
const ControlPresupuesto = ({
  presupuesto,
  gastos,
  gastado,
  setGastado,
  porcentaje,
  setporcentaje,
  disponible,
  setDisponible,
  setGatos,
  setPresupuesto,
  setisValidPresupuesto
}) => {

  useEffect(() => {
    let totalGastado = gastos.reduce(
      (total, gasto) => parseInt(gasto.cantidad) + total,
      0
    );
    setGastado(totalGastado);
    setDisponible(parseInt(presupuesto) - parseInt(totalGastado));
    let nuevoPorcentaje = porcentajeTotal(presupuesto, totalGastado);
    setporcentaje(nuevoPorcentaje);
  }, [gastos]);

  const handleResetApp = (e)=>{
    setGatos([]);
    setPresupuesto(0);
    setisValidPresupuesto(false);
  }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          style={buildStyles({
            pathColor: "#18d26e",
            trailColor: "#F5F5F5",
            pathTransitionDuration: 2.5,
            // Text size
            textSize: "35px",
          })}
          value={porcentaje}
          text={`${porcentaje}%Gastado`}
        />
      </div>

      <div className="contenido-presupuesto">

        <button className="reset-app"
        type="button"
        onClick={handleResetApp}
        >
          Resetear Presupuesto
        </button>
        <p>
          <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
        </p>

        <p>
          <span>Disponible:</span> {formatearCantidad(disponible)}
        </p>

        <p>
          <span>Gastado:</span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
