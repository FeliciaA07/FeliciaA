// if-else example - greeter
let greeting = ''
let time = new Date().getHours()

// if (time < 12){
//     greeting - 'good morning'
// }
// else {
// if (time < 16) {
//     greeting = 'good afternoon'
// }
// else {
//     greeting = 'good evening'
// }
// }


// else-if statements
// if(time < 12){
//     greeting = 'good morning'
// }
// else if (time < 16) {
//  greeting = 'good afternoon'
// }
// else if (time < 20) {
//     greeting = 'good evening'
// }
// else {
//     greeting = 'good night'
// }



// BOOLEAN LOGIC
// AND OPERATOR
if(time < 8 && time > 3){
    // some code
}

if(time < 8 && time > 3 && day === 'Monday'){
    // some code
}


// OR OPERATOR
if(time < 8 || time > 3){
    // some code
}


// NOT OPERATOR
let hasCar = true

if(hasCar) {
    console.log('You have car')
}

if(!hasCar){
    // some code
    // means "not has car"
}

if(hasCar !== true){
    console.log('You have a car!')
}
else {
    console.log("You don't have a car!")
}


// COMBINED STATEMENTS
if((day === 'Monday' && time < 12) && hasCar === true){
    console.log('You only have a car on monday mornings')
}