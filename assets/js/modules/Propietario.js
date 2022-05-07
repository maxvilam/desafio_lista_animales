export default class Propietario {
    constructor(nombre, direccion, telefono) {
      this._nombre = () => nombre;
      this._direccion = () => direccion;
      this._telefono = () => telefono;
    }
    set nombre(nombre) {
        this._nombre = () => nombre;
      }
      set direccion(direccion) {
        this._direccion = () => direccion;
      }
      set telefono(telefono) {
        this._telefono = () => telefono;
      }
    datosPropietario() {
      return `${this._nombre()} ${this._direccion()} ${this._telefono()}`;
    }
  }