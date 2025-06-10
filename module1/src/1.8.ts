//destructuring

//object destructuring

const info={
    name:{
        firstName:"shaon",
        middleName:"polock",
        lastName:"roy"
    },
    addres:"dhaka",
    contact:1794349467
}
const {
    contact,name:{middleName}
}=info

//array destructuring

const friends =['shaon','saif','siam','ashim','mamun']
const[,bondhu,...rest]=friends