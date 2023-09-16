import { AbstractEnemy } from "../abstracts/enemy";

export class Bird extends AbstractEnemy {

    constructor(){
        super({
            power:2.2,
            velocity:10
        })
    }

}