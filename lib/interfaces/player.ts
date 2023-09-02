import { AbstractPlayerClass } from "../abstracts/classes"
import { Inventory } from "../inventory/inventory"

export interface IPlayer {

    attack(): number

}

export interface IPlayerConfigs<T extends AbstractPlayerClass> {

    class: T
    name: string
    power: number
    iventory: Inventory

}
