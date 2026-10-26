class ExcepcionesCarta extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ExcepcionesCarta";
    }
}

class Carta {
    // Constructor por defecto y constructor de copias integrado
    constructor(numero = 1, palo = 'c') {
        if (numero instanceof Carta) {
            // Constructor de copias
            this.numero = numero.getNumero();
            this.palo = numero.getPalo();
        } else {
            // Constructor por defecto / normal
            this.setNumero(numero);
            this.setPalo(palo);
        }
    }

    getNumero() {
        return this.numero;
    }

    setNumero(numero) {
        if (numero >= 1 && numero <= 13) {
            this.numero = numero;
        } else {
            throw new ExcepcionesCarta("El número no es correcto (debe estar entre 1 y 13)");
        }
    }

    getPalo() {
        return this.palo;
    }

    setPalo(palo) {
        if (palo === "c" || palo === "p" || palo === "r" || palo === "t") {
            this.palo = palo;
        } else {
            throw new ExcepcionesCarta("El palo no es correcto (debe ser c, p, r o t)");
        }
    }

    mostrarCarta() {
        const nombresNumeros = ["", "As", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Reina", "Rey"];

        let nombrePalo;
        switch (this.palo) {
            case 'c': nombrePalo = "corazones"; break;
            case 'p': nombrePalo = "picas"; break;
            case 'r': nombrePalo = "rombos"; break;
            case 't': nombrePalo = "tréboles"; break;
        }

        console.log(`Es el ${nombresNumeros[this.numero]} de ${nombrePalo}`);
    }

    comparar(otraCarta) {
        if (!(otraCarta instanceof Carta)) {
            throw new ExcepcionesCarta("El argumento proporcionado no es una Carta válida.");
        }

        // 1. Comparar números
        if (this.numero !== otraCarta.getNumero()) {
            if (this.numero > otraCarta.getNumero()) {
                console.log("¡La carta actual es la ganadora!");
                return 1;
            } else {
                console.log("¡La carta recibida es la ganadora!");
                return -1;
            }
        } else {
            // 2. Si los números son iguales, comparamos palos (Trébol > Rombos > Picas > Corazones)
            const pesoPalos = { 'c': 1, 'p': 2, 'r': 3, 't': 4 };
            const pesoActual = pesoPalos[this.palo];
            const pesoOtra = pesoPalos[otraCarta.getPalo()];

            if (pesoActual > pesoOtra) {
                console.log("¡La carta actual es la ganadora (por palo)!");
                return 1;
            } else if (pesoActual < pesoOtra) {
                console.log("¡La carta recibida es la ganadora (por palo)!");
                return -1;
            } else {
                console.log("¡Empate! Las cartas son idénticas.");
                return 0;
            }
        }
    }
}

// Ejemplos de usos

console.log("--- 1. Creación de cartas y método mostrarCarta ---");
const carta1 = new Carta(1, 't'); // As de tréboles
const carta2 = new Carta(13, 'c'); // Rey de corazones
const carta3 = new Carta(1, 't'); // Otra carta idéntica

carta1.mostrarCarta(); 
carta2.mostrarCarta(); 

console.log("\n--- 2. Probando el constructor de copias ---");
const cartaCopia = new Carta(carta1);
cartaCopia.mostrarCarta();

console.log("\n--- 3. Probando el método comparar ---");
console.log("Comparando As de tréboles con Rey de corazones (Gana por número el Rey):");
carta1.comparar(carta2); // Debe ganar el Rey (-1)

console.log("\nComparando Rey de corazones con As de tréboles:");
carta2.comparar(carta1); // Debe ganar el Rey (1)

console.log("\nComparando dos cartas iguales (As de tréboles y cartaCopia):");
carta1.comparar(cartaCopia); // Empate (0)

//Ejemplos de uso de excepciones

console.log("--- Probando error de palo ---");
try {
    let c1 = new Carta(1, "manzanas"); // Palo inválido
} catch (e) {
    console.log(e.message);
}

console.log("\n--- Probando error de número ---");
try {
    let c2 = new Carta(-5, "r"); // Número inválido
} catch (e) {
    console.log(e.message);
}