import { AbstractPlayer } from "../abstracts/player";
import { IEnemyGenerator } from "../interfaces/enemy-generator";

export class Game {

    constructor(
        private readonly enemyGenerator: IEnemyGenerator, 
        private readonly player: AbstractPlayer
    ){}

    start(){

        const enemies = this.enemyGenerator.generate();

    }

    stop(){

    }
    
    restart(){
        
    }

}
