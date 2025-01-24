import alianza from 'alianza.js';
import presidentes from 'presidente.js';
import politicos from 'politico.js';

export class Batalla {
    constructor(){
        crearAlianzas();
    }

    crearAlianzas(){
       
        for(let presidente in presidentes){
            if (!Array.isArray( alianza[presidente.ideologia])) {
                alianza[presidente.ideologia] = [];
            }
            alianza[presidente.ideologia].push(presidente);
        }
    }

    crearCombate(){
        const politico1 = Math.floor(Math.random() * politicos.length);
        const politico2 = Math.floor(Math.random() * politicos.length);

        if (mismaAlianza(politico1, politico2)){
            return;
        } 

        let peleador = politico1;
        let defensor = politico2;
        while (politico1.vida > 0 && politico2.vida > 0){
            const accion = parseInt(prompt('Elija una acción:\n 1: Atacar\n  2: Ataque Especial\n 3: Recuperar Vida\n')); 
            
            switch(accion){
                case 1:
                    peleador.atacar(defensor);
                case 2:
                    peleador.ataqueEspecial(defensor);
                case 3:
                    peleador.recuperarVida(defensor);
            }
                    
            peleador = (peleador == politico1) ? politico2 : politico1;
            defensor = (defensor == politico1) ? politico2 : politico1;

        }
    }

    mismaAlianza(politico1, politico2){

        const pais1 = politico1.pais;
        const pais2 = politico2.pais;

        if (pais1==pais2){ return true;}
        if (mirarIdeologia(pais1)==mirarIdeologia(pais2)){
            return true;
        }
        return false;
    }

    mirarIdeologia(pais){
        for(let presidente in presidetes){
            if (pais==presidente.pais){
                return presidente.ideologia;
            }
        }
    }


}