export default class Politico{
    static numeroPoliticos;
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