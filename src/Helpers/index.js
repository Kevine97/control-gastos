export const generarID = () => {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
};

export const FormatearFecha = (date) => {
  const newDate = new Date(date);
  const option = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return newDate.toLocaleDateString("es-Es", option);
};

export const formatearCantidad = (cantidad) => {
  return parseInt(cantidad).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const validatorNumber = (number) => {
  let newNumber = number.toString();
  const expresion =  /^[0-9]+([.][0-9]+)?$/;
 return newNumber.match(expresion) ? true : false

};

export const porcentajeTotal = (presupuesto, totalGastado, ) => {
  return(((parseFloat(presupuesto) - (parseFloat(presupuesto) - parseFloat(totalGastado)))/parseFloat(presupuesto))*100).toFixed(2); 
};
