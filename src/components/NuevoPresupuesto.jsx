import { useState } from "react";
import Mensaje from "./Mensaje";
import { validatorNumber } from "../Helpers";
const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setisValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handleSubmitPresupuesto = (e) => {
    e.preventDefault();
    
    if (!validatorNumber(presupuesto) || parseInt(presupuesto) <= 0) {
      setMensaje("No es un presupuesto valido");
      setTimeout(() => {
        setMensaje("");
      }, 2000);
      return;
    }
    
    setisValidPresupuesto(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleSubmitPresupuesto} className="formulario">
        <div className="campo">
          <label htmlFor="">DEFINIR PRESUPUESTO</label>
          <input
            type="text"
            className="nuevo-presupuesto"
            pleaceholder="Agrega tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
          />
        </div>
        <input type="submit" value="Agregar" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
