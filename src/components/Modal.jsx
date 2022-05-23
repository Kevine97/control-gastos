import { useState, useEffect } from "react";
import { validatorNumber } from "../Helpers";
import CerrarBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";

const Modal = ({
  setmodal,
  animarmodal,
  setAnimarmodal,
  guardarGatos,
  gastoEditar,
  setGastoEditar,
  disponible
}) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [id, setId] = useState("");
  const [fecha, setFecha] = useState("");
  const [mensaje, setmensaje] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setFecha(gastoEditar.fecha);
      setId(gastoEditar.id);
    }
  }, [gastoEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("") || !validatorNumber(cantidad) || cantidad <=0) {
      setmensaje("Complete todos los campos");
      setTimeout(() => {
        setmensaje("");
      }, 2000);
      return;
    }

    if(parseFloat(cantidad) > parseFloat(disponible)){
      setmensaje(`La cantidad no puede ser mayor a ${disponible} que es lo disponible`);
      setTimeout(() => {
        setmensaje("");
      }, 2000);
      return
    }



    guardarGatos({ nombre, cantidad, categoria, id, fecha });
    ocultarModal();
  };

  const ocultarModal = () => {
    setmodal(false);
    setGastoEditar({});
    setTimeout(() => {
      setAnimarmodal(false);
    }, 500);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
      </div>

      <form
        className={animarmodal ? "formulario animar" : "formulario cerrar"}
        onSubmit={handleSubmit}
      >
        <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre del Gasto</label>
          <input
            type="text"
            placeholder="Nombre del Gasto"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad del Gasto</label>
          <input
            type="text"
            placeholder="agregar la cantidad del gasto"
            id="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria del Gasto</label>
          <select
            name="categroia"
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">--- Seleccione una categoria ---</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="salud">Salud</option>
          </select>
        </div>
        <input
          type="submit"
          value={gastoEditar.nombre ? "Editar Gasto" : "Agregar Gasto"}
        />
      </form>
    </div>
  );
};

export default Modal;
