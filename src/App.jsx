import { useState, useEffect } from "react";
import Filtros from "./components/Filtros";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import { generarID } from "./Helpers";
import IconoNuevoGatos from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem("presupuesto") ?? 0
  );
  const [isValidPresupuesto, setisValidPresupuesto] = useState(false);
  const [modal, setmodal] = useState(false);
  const [animarmodal, setAnimarmodal] = useState(false);
  const [gastos, setGatos] = useState(
    JSON.parse(localStorage.getItem('Gastos')) ?? []
  );
  const [gastoEditar, setGastoEditar] = useState({});
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setporcentaje] = useState(0);
  const [filtros, setFiltros] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  const handleNuevoGasto = () => {
    setmodal(true);
    setTimeout(() => {
      setAnimarmodal(true);
    }, 500);
  };

  const guardarGatos = (gasto) => {
    if (gasto.id) {
      const gastosActualizado = gastos.map((gastoStatte) =>
        gastoStatte.id === gasto.id ? gasto : gastoStatte
      );
      setGatos(gastosActualizado);
    } else {
      gasto.id = generarID();
      gasto.fecha = Date.now();
      setGatos([...gastos, gasto]);
    }

    setmodal(false);
    setTimeout(() => {
      setAnimarmodal(false);
    }, 500);
  };

  const eliminarGasto = (id) => {
    let gastoElimnado = gastos.filter((gasto) => gasto.id !== id);
    setGatos(gastoElimnado);
  };

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      handleNuevoGasto();
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto);
  }, [presupuesto]);

  useEffect(() => {
    let presupuestoLS = parseInt(localStorage.getItem("presupuesto") ?? 0);
    if (presupuestoLS > 0) {
      setisValidPresupuesto(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])


  useEffect(() => {
    if (filtros) {
      let gastosFiltrados = gastos.filter(e => e.categoria === filtros);
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtros])
  
  

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
        disponible={disponible}
        setDisponible={setDisponible}
        gastado={gastado}
        setGastado={setGastado}
        porcentaje={porcentaje}
        setporcentaje={setporcentaje}
        setGatos={setGatos}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <Filtros filtros={filtros} setFiltros={setFiltros}/>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtros = {filtros}
              gastosFiltrados = {gastosFiltrados}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGatos}
              alt="Icono Nuevo Gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setmodal={setmodal}
          animarmodal={animarmodal}
          setAnimarmodal={setAnimarmodal}
          guardarGatos={guardarGatos}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
          disponible={disponible}
        />
      )}
    </div>
  );
}

export default App;
