import Politico from "./politico";

class Ministro extends Politico {
    constructor(
        nombre,
        apellido,
        pais,
        vida,
        ataque,
        defensa,
        ideologia,
        golpeDeEstado
    ) {
        super(nombre, apellido, pais, vida, ataque, defensa, ideologia);
        this.golpeDeEstado = golpeDeEstado;
        this.dineroAcumulado = 0;
    }

    tipoDeAtaque() {
        return `${this.nombre} ataca con ${this.golpeDeEstado} y quita ${this.ataque} puntos de vida`;
    }

    acumularDinero(cantidad) {
        this.dineroAcumulado += cantidad;
    }

    mostrarDineroAcumulado() {
        return `Dinero acumulado: ${this.dineroAcumulado} pesetas`;
    }
}

// El dinero es aleatorio
function generarDineroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Los 3 ministros hacen golpe de estado
const ministros = [
    new Ministro(
        "Gustavo",
        "Adrianzén Olaya",
        "Perú",
        100,
        20,
        10,
        "Izquierda",
        "un golpe de estado"
    ),
    new Ministro(
        "María",
        "del Pilar",
        "España",
        100,
        25,
        15,
        "Centro",
        "la Constitución"
    ),
    new Ministro(
        "José Luis",
        "Escrivá",
        "España",
        100,
        30,
        20,
        "Derecha",
        "un golpe de estado"
    ),
];

// Dinero aleatorio para cada ministro
ministros.forEach((ministro) => {
    // Entre 500 pesetas y 2000 pesetas
    const dineroAleatorio = generarDineroAleatorio(500, 2000);
    ministro.acumularDinero(dineroAleatorio);
    console.log(ministro.tipoDeAtaque());
    console.log(ministro.mostrarDineroAcumulado());
});