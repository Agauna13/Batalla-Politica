import Politico from 'politico.js';

export class Presidente extends Politico{

    nivelCorrupcion = 0;

    constructor (nombre, apellido, pais, vida, ataque, defensa, ideologia){
        super(nombre, apellido, pais, vida, ataque, defensa, ideologia);
        asignarNivelCorrupcion();

    };

    asignarNivelCorrupcion() {
        this.nivelCorrupcion = Math.floor((Math.random() * 100) + 1)
    }

    // Recibe Objeto Alianzas y reasigna su 
    hacerAlianza(ObjetoAlianza) {

        ObjetoAlianza.keys() = alianzas
    }



    chuparDelBote (){
        
        super.recuperarVida * (1 + (this.nivelCorrupcion / 100));
    }
}