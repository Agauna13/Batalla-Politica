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
        this.ideologia = ideologia;
        Politico.addPoliticos();
    }

    atacar(defensor){
        defensor.vida -= this.ataque;
    }

    ataqueEspecial(){
        throw new Error("Debe implementar su método");
    }

    recuperarVida(){
        throw new Error("Debe implementar su método");
    }

    static addPoliticos(){
        this.numeroPoliticos++;
    }

    static removePolitico() {
        this.numeroPoliticos = Math.max(0, this.numeroPoliticos - 1);
      }

}