import React from "react";
import Gastos from "./Gastos";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtros,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor ">
      {filtros ? (
        <>
          <h2 style={{ textAlign: "center" }}>
            {gastosFiltrados.length
              ? `Gastos de ${filtros === "gastos" ? "Gastos Varios": filtros}`
              : `No hay gastos de ${filtros === "gastos" ? "Gastos Varios": filtros}`}
          </h2>
          {gastosFiltrados.map((gastos) => (
            <Gastos
              key={gastos.id}
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2 style={{ textAlign: "center" }}>
            {gastos.length
              ? `Gastos`
              : `No hay gastos`}
          </h2>
          {gastos.map((gastos) => (
            <Gastos
              key={gastos.id}
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
