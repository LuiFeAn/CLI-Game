import { IPlayer } from "../interfaces/player"

export abstract class AbstractPlayer implements IPlayer {

    private name: string
    private power: number

    constructor(name: string,power:number){
        this.name = name;
        this.power = power;
    }

    attack(){
        const randomAttackRate = Math.random() * this.power;
        return randomAttackRate;
    }

    get getName(){
        return this.name
    }

    get getPower(){
        return this.power
    }

}