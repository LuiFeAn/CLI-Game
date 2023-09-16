import { AbstractEnemy } from "../abstracts/enemy";

import { IEnemyConfigs } from "../interfaces/enemy";

export class Elf extends AbstractEnemy {

    constructor(enemyConfig: IEnemyConfigs){
        super(enemyConfig)
    }

}