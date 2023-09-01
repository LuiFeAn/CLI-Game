import { IEnemy, IEnemyConfigs } from "../interfaces/enemy"

export class Enemy implements IEnemy {

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

export class Gorila extends Enemy {

    constructor(enemyConfig: IEnemyConfigs){
        super(enemyConfig)
    }

}

export class Bird extends Enemy {

    constructor(enemyConfig: IEnemyConfigs){
        super(enemyConfig)
    }

}

export class Goblin extends Enemy {

    constructor(enemyConfig: IEnemyConfigs){
        super(enemyConfig)
    }

}

export class Elf extends Enemy {

    constructor(enemyConfig: IEnemyConfigs){
        super(enemyConfig)
    }

}



