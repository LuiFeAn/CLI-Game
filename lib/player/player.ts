import { AbstractPlayerClass } from "../abstracts/classes";
import { AbstractPlayer } from "../abstracts/player";
import { IPlayerConfigs } from "../interfaces/player";

export class Player<T extends AbstractPlayerClass> extends AbstractPlayer<T>{
    
    constructor(configs: IPlayerConfigs<T>){ 
        super(configs)
    }    
    
}