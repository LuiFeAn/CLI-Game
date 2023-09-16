import { AbstractEnemy } from "../abstracts/enemy";

export class Goblin extends AbstractEnemy {

    constructor(){
        super({
            power:6.6,
            velocity:4
        })
    }

}