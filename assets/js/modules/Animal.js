export default class Animal {
    constructor (tipo){
        this._tipo =() => tipo;
    }
    get tipo(){
        /* return this._tipo(); */
        return `El tipo de animal es un: ${this._tipo()}`
    }
}


