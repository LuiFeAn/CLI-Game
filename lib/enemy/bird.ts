import { AbstractEnemy } from "../abstracts/enemy";

import { IEnemyConfigs } from "../interfaces/enemy";

export class Bird extends AbstractEnemy {

    constructor(enemyConfig: IEnemyConfigs){
        super(enemyConfig)
    }

}