class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: ${this.idRaton}, tipoEntrada: ${this.tipoEntrada}, marca: ${this._marca}`
    }
}
class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;

    }
    get idTeclado(){
        return this._idTeclado;

    }
    toString(){
        return `Teclado: ${this._idTeclado}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca}`;
    }
}
class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;

    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    toString(){
        return `Monitor: ${this.idMonitor}, marca: ${this.marca}, tamaño: ${this.tamaño}`
    }
}

class Computadora{
    static contadorComputadora = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} 
         ${this._monitor}
          ${this._raton}
           ${this._teclado}`;
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = '';
        for (let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

// prueba de nuestro programa .......

let raton1 = new Raton('USB', 'HP');
let raton2 = new Raton('Bluetooth', 'GIGABYTE');


let teclado1 = new Teclado('Bluetooth', 'HP');
let teclado2 = new Teclado('USB', 'GENERIC');


let monitor1 = new Monitor('DELL', 15);
let monitor2 = new Monitor('GIGABYTE', 27);


let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
//console.log(computadora1.toString());
let computadora2 = new Computadora('GENERIC', monitor2, raton2, teclado2);
//console.log(computadora2.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();
