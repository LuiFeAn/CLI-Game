import { AbstractPlayerClass } from "../abstracts/classes"

export class Warrior extends AbstractPlayerClass {

    constructor(){
        super(100)
    }

    swordAttack(){

    }

}

export class Mage extends AbstractPlayerClass {
    constructor(){
        super(300)
    }

    fireBall(){

    }

    frozen(){
        
    }
}