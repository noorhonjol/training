// your class code here

export default class arr{
    #MyArray;
    
    constructor(ArrOrlenGen=5){
        if(Array.isArray(ArrOrlenGen)){
            this.#MyArray=ArrOrlenGen;
        }
        else if(typeof ArrOrlenGen ==="number"){
            this.#MyArray=this.#genArray(ArrOrlenGen);
        }
    };

    #genArray(length){
        let NewArray=[]
        for(var i=0;i<length;i++){
            NewArray.push(Math.floor(Math.random()*10) );
        }
        return NewArray;
    }
    
    getMyArray(){
        return this.#MyArray;
    }
    
    getEvens(){
        let EvensArray=[];
        this.#MyArray.forEach(element => {
            if(!(element%2))EvensArray.push(element);
        });
        return EvensArray;
    }
    
    getOdds(){
        let oddsArray=[];
        this.#MyArray.forEach(element => {
            if(element%2)oddsArray.push(element);
        });
        return oddsArray;
    }
    
    GetMedian(){
        let sum=0;
        this.#MyArray.forEach(element => {
            sum+=element;
        })

        return sum/this.#MyArray.length;
    }
    
    GetMax(){
        return Math.max(...this.#MyArray);
    }
    
    GetMin(){
        return Math.min(...this.#MyArray);
    }

}