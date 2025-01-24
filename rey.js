import Politico from "./politico";
class Rey extends Politico{

    casaNobiliaria;

    constructor(nombre, apellido, pais, vida, ataque, defensa, ideologia, casaNobiliaria) {
        super(nombre, apellido, pais, vida, ataque, defensa, ideologia);
        this.casaNobiliaria = casaNobiliaria;
    }
    getCasaNobiliaria(){
        return this.casaNobiliaria;
    }

    discursoNavidad(){
        const resultado = Math.floor(Math.random()*100);
        if (resultado<50){
            this.vida = this.vida+25;
        } else {
            this.vida = this.vida-25;
        }
    }
}