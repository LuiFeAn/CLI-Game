import { AbstractPlayerClass } from "../abstracts/classes"

export interface IPlayer {

    attack(): number

}

export interface IPlayerConfigs<T extends AbstractPlayerClass> {

    class: T
    name: string
    power: number

}
