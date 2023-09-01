import { IEnemyConfigs } from "../interfaces/enemy";

import { Gorila, Bird, Goblin, Elf } from "./enemy";

export class EnemyFactory {

    create(enemy: 'GORILA' | 'BIRD' | 'GOBLIN' | 'ELF', enemyConfigs: IEnemyConfigs){

        const handleEnemy = {

            'GORILA': new Gorila({...enemyConfigs}),

            'BIRD': new Bird({...enemyConfigs}),

            'GOBLIN': new Goblin({...enemyConfigs}),

            'ELF': new Elf({...enemyConfigs})

        }

    }

}