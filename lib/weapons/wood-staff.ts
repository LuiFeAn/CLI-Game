import { AbstractWeapon } from "../abstracts/weapon";

export class WoodStaff extends AbstractWeapon {

    constructor(){

        super({
            description:'A staff maked with woods of desert florest',
            name:'Wood Sword',
            baseDamge:[1,3]
        })

    }

}