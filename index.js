// Function Parameters Continuation

// Create a function that says hello to any user that submits their name
function sayHello(userName, location){
    let greeting = `Hello ${userName}, how is ${location}?` 
    console.log(greeting)
}

sayHello(`Sandra`, `Pretoria`)
sayHello(`Anthony`, `Lisbon`)

// Create a function to identifies the lowest score amongst 5 scores
function minimumScore(score1, score2, score3, score4, score5){
    let minimum = Math.min(score1, score2, score3, score4, score5)
    console.log(minimum)
}

minimumScore(25, 79, 80, 46, 88)
minimumScore(20, 10, 35, 67, 12)

// Create a function that collects the favorite vacation city of a user

function vacationCity(userName, vacationCity){
   let result = `Hey ${userName}, your favorite vacation city is ${vacationCity}`
    console.log(result)
}

vacationCity(`Femi`, `Kigali`)

// To make a parameter collect more than one value, we make the parameter a Rest Parameter. No parameter should be used after the Rest parameter in a function
function vacationCities(userName, ...vacationCities){
    let answer = `Hey ${userName}, your favorite vacation cities are ${vacationCities}`
     console.log(answer)
 }
 
 vacationCities(`Femi`, `Kigali`, `Yaounde`, `Moscow`)

//  Create a function that collects ice cream orders and prints the orders for the ice cream Chef to use

function iceCreamOrder(customerName, customerAddress, cupSize, flavor1, flavor2, ...toppings){
    let order = `A customer with name ${customerName} and address ${customerAddress} has the following order : Cupsize: ${cupSize}, Flavor1: ${flavor1}, Flavor2: ${flavor2}, Toppings: ${toppings}.`

    console.log(order)
}

iceCreamOrder(`Paul`, `123 Main Street`, `Large`, `Vanilla`, `Caramel`, `Almonds`, `Waffles`, `Oreos`, `Cashew Nuts`, `Gummy Bear`)

iceCreamOrder(`Sandra`, `432 Uptown Road`, `Medium`, `Vanilla`, `Caramel`, `Almonds`, `Waffles`)

// Arrays : Arrays are necessary when we need to list data. They are the most powerful structure in JavaScript
// Array - []
// Object Literal - {}

// List the days of the week
 const weekDays = [
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
    `Sunday`
]

console.log(weekDays)

// Note: Every items in an array have their own index position. We work with the Decimal number system (0-9) in an array. Arrays are numbered from 0. Anything gord inside an array: Strings, numbers, function, object literal, array can also go in an array.
// The length of an array is the number of items in the array. The length of the above array is 7.
// Index position is the position an element occupies in tha array.

// How to access object in arrays: We use the index position of the element in the array to access it. e.g for Thursday;
let myResult = weekDays[3]
console.log(myResult)