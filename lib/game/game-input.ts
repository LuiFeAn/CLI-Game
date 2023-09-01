import readline from 'readline';

export class GameInput {

    constructor(){

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

    }

}