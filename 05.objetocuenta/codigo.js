//Ejemplo Cuenta corriente
//Objeto Cuenta Corriente
var c1 = new Cuenta2("Pepillo el de los Palotes", "111-11", 1000.00, 0.01);
    Cuenta2.prototype.getNombre = getNombre;
    //c1.getNombre = getNombre;
    Cuenta2.prototype.getSaldo = getSaldo;
    Cuenta2.prototype.getNumero = getSaldo;
    c1.getInteres = getInteres;
    c1.setNombre = setNombre;
    c1.setNumero = setNumero;
    c1.setSaldo = setSaldo;
    c1.setInteres = setInteres;
    c1.ingreso = ingreso;
    c1.reintegro = reintegro;
    c1.transferencia = transferencia;
var c2 = new Cuenta2("Lola Flores", "222-22", 2000.00, 0.02);
    //c2.getNombre = getNombre;
    //c2.getSaldo = getSaldo;
    //c2.getNumero = getSaldo;
    c2.getInteres = getInteres;
    c2.setNombre = setNombre;
    c2.setNumero = setNumero;
    c2.setSaldo = setSaldo;
    c2.setInteres = setInteres;
    c2.ingreso = ingreso;
    c2.reintegro = reintegro;
    c2.transferencia = transferencia;

var c3 = new Cuenta2("Manolo Lama", "333-33", 3000.00, 0.03);
    //c2.getNombre = getNombre;
    //c2.getSaldo = getSaldo;
    //c2.getNumero = getSaldo;
    c3.getInteres = getInteres;
    c3.setNombre = setNombre;
    c3.setNumero = setNumero;
    c3.setSaldo = setSaldo;
    c3.setInteres = setInteres;
    c3.ingreso = ingreso;
    c3.reintegro = reintegro;
    c3.transferencia = transferencia;

var banco = [];

banco.push(c1);
banco.push(c2);
banco.push(c3);

//Métodos
//Contructores
//Constructor por defecto
function Cuenta1(){
    this.nombre = "";
    this.numero = "";
    this.saldo = 0.0;
    this.interes = 0.0;
}

//Constructor con parámetros
function Cuenta2(nombre,numCuenta,saldo,interes){
    this.nombre = nombre;
    this.numero = numCuenta;
    this.saldo = saldo;
    this.interes = interes;
}

//Constructor copia
function Cuenta3(c){
    this.nombre = c.nombre;
    this.numero = c.numero;
    this.saldo = c.saldo;
    this.interes = c.interes;
}
//geters
function getNombre(){
    return this.nombre;
}

function getSaldo(){
    return this.saldo;
}

function getNumero(){
    return this.numero;
}

function getInteres(){
    return this.interes;
}

//setters
function setNombre(nombre){
    this.nombre = nombre;
}

function setNumero(numero){
    this.numero = numero;
}

function setSaldo(saldo){
    this.saldo = saldo;
}

function setInteres(interes){
    this.interes = interes;
}

//Ingreso
function ingreso (cantidad){
    if(cantidad > 0){
        this.saldo += cantidad;
    }    
}
//Reintegro
function reintegro(cantidad){
    if(this.getSaldo() >= cantidad && cantidad > 0.00){
        this.saldo -= cantidad;
    }
}

//transerencia
function transferencia(cuentaDestino, importe){
    if(importe > 0.00 && this.getSaldo() >= importe){
        this.reintegro(importe);
        cuentaDestino.ingreso(importe);
    }
}

function menosPobre(banco){
    var cuenta = banco[0];
    for(var cuentaMayorDinero of banco){
        if(cuentaMayorDinero.getSaldo < cuenta.getSaldo){
            cuentaMayorDinero = cuenta;
        }
    }
    return cuentaMayorDinero;
}

function mediaSaldo(banco){
    var mediaSaldo;
    for(var cuenta of banco){
        mediaSaldo += cuenta.getSaldo;
    }
    mediaSaldo = mediaSaldo/banco.length;
    return mediaSaldo;
}

//Ejemplos de uso
console.log(c1.getNombre() + " Saldo: " + c1.getSaldo());
console.log(c2.getNombre() + " Saldo: " + c2.getSaldo());
console.log("Ingreso 500€ a Pepillo");
c1.ingreso(500.00);
console.log(c1.getNombre() + " Saldo: " + c1.getSaldo());
console.log("Transfiero 200€ de Pepillo a Lola");
c1.transferencia(c2,200.00);
console.log(c1.getNombre() + " Saldo: " + c1.getSaldo());
console.log(c2.getNombre() + " Saldo: " + c2.getSaldo());
console.log(menosPobre(banco));
console.log(mediaSaldo(banco));