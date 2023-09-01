import { Enemy } from "../lib/enemy/enemy";
import { EnemyFactory } from "../lib/enemy/enemy-factory";

import { EnemyGenerator } from "../lib/enemy/enemy-generator";

const enemyFactory = new EnemyFactory();

const braveBird = enemyFactory.create('BIRD',{
    power:300,
    velocity:200
});

const poorBird = enemyFactory.create('BIRD',{
    power:100,
    velocity:10
});


