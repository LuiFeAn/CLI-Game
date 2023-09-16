import { AbstractEnemy } from "../abstracts/enemy";

export class Gorila extends AbstractEnemy {

    constructor(){
        super({
            power:10,
            velocity:3
        })
    }

}