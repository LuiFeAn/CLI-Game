import { AbstractEnemy } from "../abstracts/enemy";

export class Elf extends AbstractEnemy {

    constructor(){
        super({
            power:3.1,
            velocity:3.4
        })
    }

}