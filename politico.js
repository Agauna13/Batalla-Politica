//Hecho por Alan Adamson


export default class Politico{
    static numeroPoliticos = 0;
    constructor (nombre, apellido, pais, vida, ataque, defensa, ideologia){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.ideología = ideologia;
        addPoliticos();
    }

    atacar(){

    }

    ataqueEspecial(){

    }

    golpeDeEstado(){

    }

    comerGambas(){

    }

    static addPoliticos(){
        this.numeroPoliticos++;
    }



}