'use strict'



/*
let hasdriversLicense = false;
const passTest =true;

if (passTest) hasdriverLicense = true;
if(hasdriversLicense) console.log ('I can Drive :D'); ``
*/
                                     


// understaning functions 
// V 33



// function logger () {
//     console.log('My name is ZKJK')
// }

// logger();
// logger();
// logger();

// function fruitProcessor (apples , oranges){
//     console.log(apples,oranges);
//     const juice = ` Juice with  ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

 // ``

//const applejuice = fruitProcessor(5,0);

/* his line is doing the same thing as the previous line,
 but it’s also storing the result in a variable called applejuice. 
 It’s like putting the juice you just made into a container 
 labeled “applejuice.”
 */

// console.log(applejuice);


// console.log((fruitProcessor(5,0)));





/*
This line is doing two things:
fruitProcessor(5,0): First, it’s calling the fruitProcessor function with 5 apples and 0 oranges. 
It’s like telling the function, “Make me juice with 5 apples and 0 oranges.” 
The function will then do its job and return a sentence describing the juice.
console.log(...): Then, it’s taking the sentence that fruitProcessor returned, and printing it out to the console.
 It’s like reading out loud the sentence that describes the juice.
*/







// V 34


/*


function calAge (birthyear){
    return 2037 - birthyear;
}
 
const age1 = calAge(2001);
console.log(age1);


*/



// function decalaration 

// function calAge(birthyear){
//     return  2037 - birthyear;
// }
 

//  const age = calAge(1991);
//  console.log(age);



// Function Expression 


// const calage2 = function (birthyear) {
//      return 2037 - birthyear;
// }

// const age2 = calage2(1991);

// console.log(age , age2);




// V 35

// We will study the arrow function in it

// regular function expression 

/*
const calage2 = function (birthyear){
    return 2037 - birthyear;
}
*/


// function decalration using arrow function 



// const calAge3 = birthyear  /* parameter */ => 2037 - birthyear; /*return value */

 // const age3 = calAge3(1991); // calling function with argument ,
// the result of function call is assigned to variable name age2.

 // console.log(age3);


 // function declaration 

 /*
 const yearsuntilretire = ( birthyear , firstname) => {
    const  age = 2037 - birthyear;
    const retirement = 65-age;
    
    return ` ${firstname} retires in ${retirement} years`;
 }
 */


 // function calling 

 /*
 console.log(yearsuntilretire(1991 ,'jonas'));
 console.log(yearsuntilretire(1980 , 'bob'));
*/




// V 36 Functions calling other functions 




/*
function cutFruitPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples , oranges) {
    const applePeices = cutFruitPieces(apples);
    const orangePeices = cutFruitPieces(oranges);

    const juice = `Juice with ${applePeices} piece of apple and ${orangePeices} pieces of orange .` 
    return juice;
}

console.log(fruitProcessor(2,3)); 
*/




// V 37 Dunctions review 


/*
const callage = function (birthyear){
    return 2037 - birthyear;
}

const yearsuntilretire = ( birthyear , firstname) => {
    const  age = callage(birthyear);
    const retirement = 65-age;

    if(retirement >0 ) {
        console.log( `${firstname} retires in ${retirement} years` );
        return retirement;
    }else{
        console.log(` ${firstname} has already retired `);
        return -1;
    }
 }

 console.log(yearsuntilretire(1991,'Jonas'));
 console.log(yearsuntilretire(1950 ,'Mike'));


*/

// Challenge



// arrays in js

const friends = ['Micheal' , 'Steven', 'Peter'];
console.log(friends);













