import { IEnemy } from "../interfaces/enemy";

import { IEnemyGenerator,IEnemyGeneratorConfigs } from "../interfaces/enemy-generator";

export class EnemyGenerator implements IEnemyGenerator {

    enemySpanwRate

    constructor(private readonly enemy: IEnemy,enemyGeneratorConfigs?: IEnemyGeneratorConfigs){
        
        this.enemySpanwRate = enemyGeneratorConfigs?.enemySpawnRate || 1000

    }

    get getEnemy(){

        return this.enemy;

    }

    generate(){

        const randomEnemies = Math.ceil(Math.random() * this.enemySpanwRate);

        const enemies: IEnemy [] = [];

        for(let i = 0; i < randomEnemies; i++){

            enemies.push(this.enemy);

        }

        return enemies;

    }

}