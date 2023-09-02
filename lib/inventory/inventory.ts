import { IIventoyItems } from "../interfaces/inventory";

import { InventoryError } from "../errors/inventory-error";

export class Inventory {

    private items: IIventoyItems []

    constructor(initialItems?: IIventoyItems []){
        this.items = initialItems || []
    }

    get getItems(){
        return this.items
    }

    addItems(item: IIventoyItems){
        this.items.push(item);
    }

    getItem(_item: string){

        const selectedItem = this.items.find( 
            item => item.item.includes(_item) 
        );

        return selectedItem;

    }

    dropItem(_item: string){

        const droppedItem = this.getItem(_item);

        if( !droppedItem ){
            
            throw new InventoryError('non-existent item');

        }

        const updatedItemList = this.items.filter( item => item.item != _item );

        this.items = updatedItemList;

        return droppedItem;
        
    }

}