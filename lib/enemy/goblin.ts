import { AbstractEnemy } from "../abstracts/enemy";

import { IEnemyConfigs } from "../interfaces/enemy";

export class Goblin extends AbstractEnemy {

    constructor(enemyConfig: IEnemyConfigs){
        super(enemyConfig)
    }

}