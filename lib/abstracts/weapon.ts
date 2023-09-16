import { AbstractItem } from "./item";

import { IWeaponOptions } from "../interfaces/weapon";

import { MaxWeaponBaseDamgeType } from "../types/weapon";

export abstract class AbstractWeapon extends AbstractItem {

    private baseDamge: MaxWeaponBaseDamgeType

    constructor(weaponOptions: IWeaponOptions){

        super(weaponOptions.name,weaponOptions.description)

        this.baseDamge = weaponOptions.baseDamge;

    }

    get damge(): number{

        const _baseDamge = Math.random() * (this.baseDamge[1] - this.baseDamge[0]) + this.baseDamge[0];

        return _baseDamge

    }
}

export class WoodSword extends AbstractWeapon {

    constructor(){

        super({
            description:'A wooden sword made from the trees of the fairy forest',
            name:'Wood Sword',
            baseDamge:[2,7]
        })
        
    }
}

export class WoodStaff extends AbstractWeapon {

    constructor(){

        super({
            description:'A staff maked with woods of desert florest',
            name:'Wood Sword',
            baseDamge:[1,3]
        })

    }

}

