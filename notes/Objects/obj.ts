const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};


// declare object types in  variable 
type car2Types = {
    carName: string,
    model: string,
    year: number,
}
const car2 : car2Types = {
    carName: 'BMW',
    model: 'M5',
    year: 2023
}

// intersection types
type carType = {
    carName: string,
    model: string,
}
type yearType = {
    year : number
} 
type detailsType = carType & yearType
    
        
function sayDetailsOfObj(obj:detailsType) {
    let { carName, model, year } = obj;
    return `${carName} ${model} ${year} variant is a awesome car`
}

console.log(sayDetailsOfObj(car2));
