var datos = [
    [
        {
            dni: "11111111A",
            nombre: "PEPE",
            apellidos: "LOPEZ PEREZ",
            telefono: "666666666",
            asignaturas: [
                { nombre: "DWEC", codigo: "1111" },
                { nombre: "DIW", codigo: "3333" }
            ]
        },
        {
            dni: "222222222A",
            nombre: "MARIA",
            apellidos: "GARCIA GOMEZ",
            telefono: "677777777",
            asignaturas: [
                { nombre: "DWES", codigo: "2222" },
                { nombre: "DAW", codigo: "4444" },
                { nombre: "EIE", codigo: "5555" }
            ]
        },
        {
            dni: "333333333A",
            nombre: "JUAN",
            apellidos: "MARTINEZ RUIZ",
            telefono: "688888888",
            asignaturas: [
                { nombre: "DIW", codigo: "3333" },
                { nombre: "DWEC", codigo: "1111" }
            ]
        },
        {
            dni: "4444444444A",
            nombre: "ANA",
            apellidos: "FERNANDEZ SANCHEZ",
            telefono: "699999999",
            asignaturas: [
                { nombre: "DAW", codigo: "4444" },
                { nombre: "BD", codigo: "6666" },
                { nombre: "PROG", codigo: "7777" }
            ]
        }
    ]
];

var profe = {
    dni: "12121222",
    nombre: "PEPE",
    apellidos: "LOPEZ PEREZ",
    telefono: "666777777",
    asignaturas: [
        { nombre: "ENTORNOS", codigo: "1133" },
        { nombre: "LENGUAJE DE MARCAS", codigo: "3322" }
    ]
}

//Insertar al final de un array
datos.push(profe);

//EJERCICIO 2
//Dado un código de asignatura, mostrar el nombre y apellidos
//del profesor que la imparte 
var codAsignatura = "1133";

//Interactuando con el usuario
var texto1 = document.getElementById("dni");
var texto2 = document.getElementById("nombre");
var texto3 = document.getElementById("apellidos");
var texto4 = document.getElementById("telefono");
var texto5 = document.getElementById("nombreasig");
var texto6 = document.getElementById("codigoasig");
var btn1 = document.getElementById("boton");

//Capturando eventos
btn1.addEventListener("click", function(){
    var profe = {
        dni: texto1.value,
        nombre: texto2.value,
        apellidos: texto3.value,
        telefono: texto4.value,
        asignaturas: [
            { nombre: texto5.value, codigo: texto6.value}
        ]
    }

    datos.push(profe);
    
    console.log(profe)
});
