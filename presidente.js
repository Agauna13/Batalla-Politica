import 'presidente.js';

class Presidente{
    constructor (nombre, apellido, pais, vida, ataque, defensa, ideologia, nivelCorrupcion){
        super(nombre, apellido, pais, vida, ataque, defensa, ideologia);
        this.nivelCorrupcion = nivelCorrupcion;

    }


    setNivelCorrupcion(nivel){
        
        let porcentajeCorrupcion = this.nivelCorrupcion += nivel;

        if(porcentajeCorrupcion < 100){
            this.nivelCorrupcion = 100;

        }else if(porcentajeCorrupcion < 0){
            this.nivelCorrupcion *= 0;
        }

        return porcentajeCorrupcion;
    }
}