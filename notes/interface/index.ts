// create interface with optional types 
interface People  {
    firstName: string,
    lastName: string,
    age?: number
}

let rafi: People = {
    firstName: "Sajib",
    lastName: 'Islam',
    
}
console.log(rafi);
