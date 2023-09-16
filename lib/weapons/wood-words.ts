import { AbstractWeapon } from "../abstracts/weapon";

export class WoodSword extends AbstractWeapon {

    constructor(){

        super({
            description:'A wooden sword made from the trees of the fairy forest',
            name:'Wood Sword',
            baseDamge:[2,7]
        })
        
    }
}