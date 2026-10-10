// Constructor por defecto (sin parámetros)
function CuentaPorDefecto() {
    this.nombreCliente = "";
    this.numeroCuenta = "";
    this.tipoInteres = 0.0;
    this.saldo = 0.0;
}

// Constructor con todos los parámetros
function CuentaParametros(nombreCliente, numeroCuenta, tipoInteres, saldo) {
    this.nombreCliente = nombreCliente;
    this.numeroCuenta = numeroCuenta;
    this.tipoInteres = tipoInteres;
    this.saldo = saldo;
}

// Constructor copia
function CuentaCopia(cuentaOriginal) {
    this.nombreCliente = cuentaOriginal.nombreCliente;
    this.numeroCuenta = cuentaOriginal.numeroCuenta;
    this.tipoInteres = cuentaOriginal.tipoInteres;
    this.saldo = cuentaOriginal.saldo;
}

//Getters y Setters
function getNombreCliente() {
    return this.nombreCliente;
}
function setNombreCliente(nombreCliente) {
    this.nombreCliente = nombreCliente;
}

function getNumeroCuenta() {
    return this.numeroCuenta;
}
function setNumeroCuenta(numeroCuenta) {
    this.numeroCuenta = numeroCuenta;
}

function getTipoInteres() {
    return this.tipoInteres;
}
function setTipoInteres(tipoInteres) {
    this.tipoInteres = tipoInteres;
}

function getSaldo() {
    return this.saldo;
}
function setSaldo(saldo) {
    this.saldo = saldo;
}

// Ingreso: aumenta saldo si no es negativo. Devuelve true o false.
function ingreso(cantidad) {
    if (cantidad > 0) {
        this.saldo += cantidad;
        return true;
    }
    return false;
}

// Reintegro: disminuye saldo si hay suficiente y no es negativo. Devuelve true o false.
function reintegro(cantidad) {
    if (cantidad > 0 && this.getSaldo() >= cantidad) {
        this.saldo -= cantidad;
        return true;
    }
    return false;
}

// Transferencia: pasa dinero de origen a destino si hay fondos. Devuelve true o false.
function transferencia(cuentaDestino, importe) {
    if (importe > 0 && this.getSaldo() >= importe) {
        this.reintegro(importe);
        cuentaDestino.ingreso(importe);
        return true;
    }
    return false;
}

// Probando Constructor por defecto
var c1 = new CuentaPorDefecto();
c1.setNombreCliente("Ana Gómez");
c1.setNumeroCuenta("ES11-0001");
c1.setTipoInteres(1.2);
c1.setSaldo(400.0);

// Asignando métodos a c1 mediante prototype o asignación directa
CuentaPorDefecto.prototype.getNombreCliente = getNombreCliente;
CuentaPorDefecto.prototype.setNombreCliente = setNombreCliente;
CuentaPorDefecto.prototype.getNumeroCuenta = getNumeroCuenta;
CuentaPorDefecto.prototype.setNumeroCuenta = setNumeroCuenta;
CuentaPorDefecto.prototype.getTipoInteres = getTipoInteres;
CuentaPorDefecto.prototype.setTipoInteres = setTipoInteres;
CuentaPorDefecto.prototype.getSaldo = getSaldo;
CuentaPorDefecto.prototype.setSaldo = setSaldo;
CuentaPorDefecto.prototype.ingreso = ingreso;
CuentaPorDefecto.prototype.reintegro = reintegro;
CuentaPorDefecto.prototype.transferencia = transferencia;


// Probando Constructor con parámetros
var c2 = new CuentaParametros("Carlos Pérez", "ES22-0002", 2.0, 1500.0);

CuentaParametros.prototype.getNombreCliente = getNombreCliente;
CuentaParametros.prototype.setNombreCliente = setNombreCliente;
CuentaParametros.prototype.getNumeroCuenta = getNumeroCuenta;
CuentaParametros.prototype.setNumeroCuenta = setNumeroCuenta;
CuentaParametros.prototype.getTipoInteres = getTipoInteres;
CuentaParametros.prototype.setTipoInteres = setTipoInteres;
CuentaParametros.prototype.getSaldo = getSaldo;
CuentaParametros.prototype.setSaldo = setSaldo;
CuentaParametros.prototype.ingreso = ingreso;
CuentaParametros.prototype.reintegro = reintegro;
CuentaParametros.prototype.transferencia = transferencia;


// Probando Constructor copia (copiando los datos de c2)
var c3 = new CuentaCopia(c2);
c3.setNombreCliente("Carlos Pérez (Copia)");

CuentaCopia.prototype.getNombreCliente = getNombreCliente;
CuentaCopia.prototype.setNombreCliente = setNombreCliente;
CuentaCopia.prototype.getNumeroCuenta = getNumeroCuenta;
CuentaCopia.prototype.setNumeroCuenta = setNumeroCuenta;
CuentaCopia.prototype.getTipoInteres = getTipoInteres;
CuentaCopia.prototype.setTipoInteres = setTipoInteres;
CuentaCopia.prototype.getSaldo = getSaldo;
CuentaCopia.prototype.setSaldo = setSaldo;
CuentaCopia.prototype.ingreso = ingreso;
CuentaCopia.prototype.reintegro = reintegro;
CuentaCopia.prototype.transferencia = transferencia;

//Prueba del codigo
console.log("--- ESTADO INICIAL ---");
console.log(c1.getNombreCliente() + " | Saldo: " + c1.getSaldo());
console.log(c2.getNombreCliente() + " | Saldo: " + c2.getSaldo());
console.log(c3.getNombreCliente() + " | Saldo: " + c3.getSaldo());

console.log("\n--- PRUEBA DE INGRESOS ---");
var ingresoOk = c1.ingreso(300.0);
console.log("¿Ingreso de 300€ en c1 exitoso?: " + ingresoOk + " | Nuevo saldo: " + c1.getSaldo());

var ingresoFail = c1.ingreso(-50.0);
console.log("¿Ingreso negativo (-50€) exitoso?: " + ingresoFail);

console.log("\n--- PRUEBA DE REINTEGROS ---");
var reintegroOk = c2.reintegro(500.0);
console.log("¿Reintegro de 500€ en c2 exitoso?: " + reintegroOk + " | Nuevo saldo: " + c2.getSaldo());

var reintegroFail = c2.reintegro(99999.0);
console.log("¿Reintegro excesivo en c2 exitoso?: " + reintegroFail);

console.log("\n--- PRUEBA DE TRANSFERENCIA ---");
console.log("Saldo inicial c2: " + c2.getSaldo());
console.log("Saldo inicial c1: " + c1.getSaldo());

var transfiereOk = c2.transferencia(c1, 400.0);
console.log("¿Transferencia de 400€ de c2 a c1 exitosa?: " + transfiereOk);
console.log("Saldo final c2: " + c2.getSaldo());
console.log("Saldo final c1: " + c1.getSaldo());