import { Player } from "../lib/player/player";

import { Mage } from "../lib/classes/classes";

import { Inventory } from "../lib/inventory/inventory";

const magePlayer = new Player({
    class: new Mage(),
    name:'Luis Fernando',
    power:200,
    iventory: new Inventory([
        {
            name:'Colar Âmbar',
            quanty:2,
            description:'Colar ambar que cura todos que estiverem ao seu redor'
        },
        {
            name:'Cajado de mago',
            quanty:1,
            description:'Cajado de mago simples, recebido na escola de magia'
        },
        
    ])
});







