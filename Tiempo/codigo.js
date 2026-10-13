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