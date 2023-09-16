import { IEnemy, IEnemyConfigs } from "../interfaces/enemy"

export abstract class AbstractEnemy implements IEnemy {

    power

    velocity

    constructor({
        power,
        velocity
    }:IEnemyConfigs){
    
        this.power = power
    
        this.velocity = velocity
        
    }

    attack(){
        
        const attackRate = Math.random() * this.power;

        return attackRate;
        
    }

}






