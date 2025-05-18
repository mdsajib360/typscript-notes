function sayDetails(name: string, age: string | number) {
    let currentAge = age;
    if (typeof age == 'string') {
        currentAge = Number(age) -2
    } else {
        currentAge = age - 2;
    }
    console.log(`your name is ${name}, your age is ${currentAge}`);
    
}        
sayDetails('Sajib', 'twenty three')            