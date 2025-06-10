
//learning function

//function are 2 type: 1.normal function 2.arrow function

//normal function:

function add(num1 :number, num2: number){
    return num1+num2
}
add(2,2)

//method

const poorUser={
    name:"shaon",
    balance:0,
    addBalance(balance:number):string{
        return`my current balance is ${this.balance+balance}`
    }
}

const array: number[]=[611,585]
const newArray:number[]=array.map((element:number):number=>(element*element))
