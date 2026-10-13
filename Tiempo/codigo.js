// CONSTRUCTOR
function Tiempo(anio, mes, dia, hora, minuto, segundo) {
    // Si todos los parámetros valen 0, inicializamos con la fecha y hora actual
    if (anio === 0 && mes === 0 && dia === 0 && hora === 0 && minuto === 0 && segundo === 0) {
        var ahora = new Date();
        this.anio = ahora.getFullYear();
        this.mes = ahora.getMonth() + 1; // Los meses en Date van de 0 a 11
        this.dia = ahora.getDate();
        this.hora = ahora.getHours();
        this.minuto = ahora.getMinutes();
        this.segundo = ahora.getSeconds();
    } else {
        this.anio = anio;
        this.mes = mes;
        this.dia = dia;
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }
}

// GETTERS Y SETTERS
Tiempo.prototype.getAnio = function () {
    return this.anio;
};
Tiempo.prototype.setAnio = function (anio) {
    this.anio = anio;
};

Tiempo.prototype.getMes = function () {
    return this.mes;
};
Tiempo.prototype.setMes = function (mes) {
    this.mes = mes;
};

Tiempo.prototype.getDia = function () {
    return this.dia;
};
Tiempo.prototype.setDia = function (dia) {
    this.dia = dia;
};

Tiempo.prototype.getHora = function () {
    return this.hora;
};
Tiempo.prototype.setHora = function (hora) {
    this.hora = hora;
};

Tiempo.prototype.getMinuto = function () {
    return this.minuto;
};
Tiempo.prototype.setMinuto = function (minuto) {
    this.minuto = minuto;
};

Tiempo.prototype.getSegundo = function () {
    return this.segundo;
};
Tiempo.prototype.setSegundo = function (segundo) {
    this.segundo = segundo;
};

// MÉTODOS DE FORMATO (dd/mm/aaaa y hh:mm:ss)
// Función auxiliar interna para añadir un '0' delante si es menor de 10
function pad(n) {
    return n < 10 ? "0" + n : n;
}

Tiempo.prototype.getFechaCompleta = function () {
    return pad(this.dia) + "/" + pad(this.mes) + "/" + this.anio;
};

Tiempo.prototype.getHoraCompleta = function () {
    return pad(this.hora) + ":" + pad(this.minuto) + ":" + pad(this.segundo);
};

// MÉTODO ES BISIESTO
Tiempo.prototype.esBisiesto = function () {
    var a = this.anio;
    return (a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0);
};

// MÉTODOS DE COMPARACIÓN Y AUXILIAR
// Método auxiliar para convertir nuestro objeto Tiempo a un objeto Date de JS para comparar fácilmente
Tiempo.prototype._toDate = function () {
    return new Date(this.anio, this.mes - 1, this.dia, this.hora, this.minuto, this.segundo);
};

Tiempo.prototype.esMayor = function (otroTiempo) {
    return this._toDate().getTime() > otroTiempo._toDate().getTime();
};

Tiempo.prototype.esMenor = function (otroTiempo) {
    return this._toDate().getTime() < otroTiempo._toDate().getTime();
};

Tiempo.prototype.esIgual = function (otroTiempo) {
    return this._toDate().getTime() === otroTiempo._toDate().getTime();
};

// MÉTODO SUMAR HORA
Tiempo.prototype.sumaHora = function (otroTiempo) {
    var d = this._toDate();
    d.setHours(d.getHours() + otroTiempo.getHora());
    d.setMinutes(d.getMinutes() + otroTiempo.getMinuto());
    d.setSeconds(d.getSeconds() + otroTiempo.getSegundo());

    // Actualizamos los valores del objeto actual con el resultado
    this.anio = d.getFullYear();
    this.mes = d.getMonth() + 1;
    this.dia = d.getDate();
    this.hora = d.getHours();
    this.minuto = d.getMinutes();
    this.segundo = d.getSeconds();
};

console.log("--- 1. PROBANDO CONSTRUCTOR CON PARÁMETROS Y ACTUAL ---");
var t1 = new Tiempo(2024, 5, 12, 10, 30, 0); // 12 de mayo de 2024, 10:30:00
var tActual = new Tiempo(0, 0, 0, 0, 0, 0);   // Como todo es 0, coge la fecha/hora actual

console.log("Fecha t1: " + t1.getFechaCompleta() + " - Hora t1: " + t1.getHoraCompleta());
console.log("Fecha actual: " + tActual.getFechaCompleta() + " - Hora actual: " + tActual.getHoraCompleta());

console.log("\n--- 2. PROBANDO ES BISIESTO ---");
console.log("¿El año 2024 es bisiesto?: " + t1.esBisiesto()); // true
var tNoBisiesto = new Tiempo(2023, 1, 1, 0, 0, 0);
console.log("¿El año 2023 es bisiesto?: " + tNoBisiesto.esBisiesto()); // false

console.log("\n--- 3. PROBANDO COMPARACIONES ---");
var t2 = new Tiempo(2025, 1, 1, 12, 0, 0); // 1 de enero de 2025
console.log("¿Es t1 mayor que t2?: " + t1.esMayor(t2));   // false
console.log("¿Es t1 menor que t2?: " + t1.esMenor(t2));   // true
console.log("¿Es t1 igual a t1?: " + t1.esIgual(t1));     // true

console.log("\n--- 4. PROBANDO SUMA DE HORA ---");
console.log("Hora inicial de t1: " + t1.getHoraCompleta());
var tHorasASumar = new Tiempo(0, 0, 0, 3, 45, 15); // Sumamos 3 horas, 45 min y 15 seg
t1.sumaHora(tHorasASumar);
console.log("Hora de t1 tras sumar 3h 45m 15s: " + t1.getHoraCompleta());