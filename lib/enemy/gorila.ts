import { AbstractEnemy } from "../abstracts/enemy";

import { IEnemyConfigs } from "../interfaces/enemy";

export class Gorila extends AbstractEnemy {

    constructor(enemyConfig: IEnemyConfigs){
        super(enemyConfig)
    }

}