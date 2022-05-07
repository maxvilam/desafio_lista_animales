const sendFormBtn = document.getElementById("sendFormBtn");
/*
sendFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
});
*/
const form = document.getElementById("form");
const propietario = document.getElementById("propietario");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const nombreMascota = document.getElementById("nombreMascota");
const tipo = document.getElementById("tipo");
const enfermedad = document.getElementById("enfermedad");
import Animal from "./modules/Animal.js";
import Propietario from "./modules/Propietario.js";
import Mascota from "./modules/Mascota.js";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.table({
    propietario: propietario.value,
    telefono: telefono.value,
    direccion: direccion.value,
    nombreMascota: nombreMascota.value,
    tipo: tipo.value,
    enfermedad: enfermedad.value,
  });

  const propietario1 = new Propietario(
    propietario.value,
    telefono.value,
    direccion.value
  );
  /* 
  console.log(propietario1.datosPropietario());
    const animal1= new Animal(tipo.value)
    console.log(animal1.tipo); */
  const mascota1 = new Mascota(nombreMascota.value, enfermedad.value);
  const animal1 = new Animal(tipo.value);
  
  console.log(mascota1.nombre);
  console.log(mascota1.enfermedad);
  console.log(propietario1.propietario);
  console.log(propietario1.telefono);
  console.log(propietario1.direccion);
  console.log(propietario1.datosPropietario());
  console.log(animal1.tipo);
  


  // form.reset()
/*   resetForm();
 */});

/* const resetForm = () => {
  propietario.value = "";
  telefono.value = "";
  direccion.value = "";
  nombreMascota.value = "";
  tipo.value = "";
  enfermedad.value = "";
}; */
