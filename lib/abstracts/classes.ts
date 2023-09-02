

export abstract class AbstractPlayerClass{

    private power

    constructor(power: number){
        this.power = power;
    }
    
    get getPower(){
        return this.power
    }
    

}