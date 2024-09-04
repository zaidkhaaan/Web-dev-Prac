'use strict';

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

// function fruitProcessor(apples, oranges) {
//   // console.log(apples,oranges);
//   const juice = ` Juice with  ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// //  ``

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);
// console.log(fruitProcessor(5, 0));
// const num = Number('23');

/* his line is doing the same thing as the previous line,
 but it’s also storing the result in a variable called applejuice. 
 It’s like putting the juice you just made into a container 
 labeled “applejuice.”
 */

// console.log(applejuice);

// console.log((fruitProcessor(5,0)));

/*
This line is doing two things:
fruitProcessor(5,0): First, it’s calling the fruitProcessor function
with 5 apples and 0 oranges. 
It’s like telling the function, “Make me juice with 5 apples and 0 oranges.” 
The function will then do its job and return a sentence describing the juice.
console.log(...): Then, it’s taking the sentence that fruitProcessor returned, 
and printing it out to the console.
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
// Basically giving name(adding variable inside it ) to the function

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

// synatx of arrrow function
// const calAge3 = birthyear  /* parameter */ => 2037 - birthyear; /*return value */

// const age3 = calAge3(1991); // calling function with argument ,
// the result of function call is assigned to variable name age2.

// console.log(age3);

// function declaration

// practise

//  const calAge3 =  birthYear => 2037 - birthYear;
//  const age3 = calAge3(1991);
//  console.log(age3);

//  const yearsuntilretirement = (birthYear,firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;

//     return `${firstName} retires in ${retirement}`
//  }

//  console.log(yearsuntilretirement(1991,'zaid'));

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

// V 37 Functions review

// function foodprocessor(apples , oranges){
//     return juice  = `Juice with ${apples} apples and ${oranges} oranges.`;
//    return juice;
// }
// console.log(foodprocessor(5,5));

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

// const friends = ['Micheal' , 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array (1991, 1984, 2008, 2020);

// console.log(friends[0]);
//console.log(years);

// console.log(friends.length);
// friends[2] ='JAY';
// console.log(friends);

// const firstname ='jonas';
// const jonas = [firstname , 'pathan', 2037-1991, 'teacher', friends];
//  console.log(jonas);
// console.log(jonas.length);

// Excercise

/*
const calcAge = function (birthyear){

return 2037 - birthyear;
}


const yearss = [1990, 1967,2002,2010,2018];
const age1 = calcAge(yearss[0]);
const age2 = calcAge(yearss[1]);
const age3 = calcAge(yearss[yearss.length-1]);

console.log(age1,age2,age3);

const ages = [calcAge(yearss[0]) ,calcAge(yearss[1]) ,calcAge( yearss[yearss.length-1])];
console.log(ages);
*/

// v 40 basic array operations
/*

const friends = ['Micheal' ,'Steven', 'Peter'];

 // friends.push('Jay');
console.log(friends);

const newlength = friends.push('Jay');
console.log(newlength);


friends.unshift('John');
console.log(friends);

// Remove Elements 

friends.pop();

const popped = friends.pop();
console.log(popped);

console.log(friends);

friends.shift(); // to add elements in an array 
console.log(friends);

console.log(friends.indexOf('Steven'));
 // prints the index of the elemenyt

 console.log(friends.indexOf('Bob'));

 // prints -1 for the element which is not present in the array 

 console.log(friends.includes('Bob'));

 // returns boolean expression as true or false for the element present in the array


 if (friends.includes('Steven')){

 console.log('You have a friend called steven');
 }

 // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


// 

/*
const calAge = function(birthYear){
    return 2037 - birthYear;
};

//console.log(calAge(1990));

const yearsuntilretirement = function (birthYear , firstName){
    const age = calAge(birthYear) ;
    const retirement = 65- age;
    if (retirement > 0){
        console.log(` ${firstName}  retires in  ${retirement} years `);
        return retirement
    }else{
        console.log(`${firstName} has already retired `);
        return -1 ;
    }
     
    
}

console.log(yearsuntilretirement(1991,'Jonas'));
console.log(yearsuntilretirement(1951,'Jonas'));

*/

/*
const calAge = function(birthYear) {
    return 2037 - birthYear;
};

const yearsuntilretirement = function (birthYear, firstName) {
    const age = calAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
};

console.log(yearsuntilretirement(1991, 'Jonas'));
console.log(yearsuntilretirement(1951, 'Jonas'));
*/

/*
const calAverage= (a,b,c) => (a+b+c)/3;
//console.log(calAverage(1,2,3));

let scoreDolphins  = calAverage(44,23,71);
let scoreKoalas  = calAverage(65,54,49);

console.log(scoreDolphins , scoreKoalas);

const checkWinner = function (avgDolphins , avgKoalas){
    if (avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins Wins(${avgDolphins} vs. ${avgKoalas})`);
    }
        else if (avgKoalas >= 2*avgDolphins ){
            console.log(`Koalas Wins(${avgKoalas} vs. ${avgDolphins})`);
        }else{
            console.log(`No team wins ...`)
        }
    }
    
   // checkWinner (scoreDolphins , scoreKoalas);
   checkWinner (576 , 111);
   
   scoreDolphins = calAverage (85,54,41);
   scoreKoalas = calAverage(23,34,27);
   
   console.log(scoreDolphins , scoreKoalas);
   console.log(scoreDolphins , scoreKoalas);



   // objects in javascript


   objects in javascript are usually denoted by {}

   for example :- 

   const jonas ={
   firstName: 'Jonas'
   lastName: 'Schedtamann',
   age: 2037- 1991,
   job : 'teacher',
   friends :['Micheal' , 'Peter', 'Steven']
   
   
   };

   console.log(jonas);











/* Write your code below. Good luck! 🙂 */

/*
const calcTip = function (bill) {

if (bill <= 300 && bill>=50 ){

return 0.15*bill;
    
}else{
    return 0.20*a;
}
}

const bills=[125,555,44];


console.log(calcTip(bills));
*/

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//console.log("Try programiz.pro");

// const jonas = {
//     firstName : 'Jonas',
//     lastName : 'Schmedtmann',
//     age :  2037 - 1991,
//     job : 'Teacher',
//     friends : ['Micheal','Peter','Steven']
// }

// console.log (jonas);
// console.log(jonas.lastName); // jonas is an object calling lastName
// console.log(jonas['lastName']); // calling lastName using jonas object from [bracket notation]

// const nameKey = 'Name';

// console.log(jonas ['first'+ nameKey]);
// console.log(jonas ['last'+ nameKey]);

// cannot acces object using --->>> console.log([jonas.'last' +namekey])

// when can we use bracket or . notation
/*
Answer :- when we need to compute the property name ---> (first and last name) --> [] bracket notation
in other case use . notation .
*/

/*
 const interestedIn = prompt('What do you want to know about Jonas ? Chosse between firstName , lastName, age , job , and friends');

console.log(jonas[interestedIn]);

if(jonas[interestedIn]){
     console.log(jonas[interestedIn])
 }else{
     console.log('Wrong Answer !Chosse between firstName ,lastName,age,job,friends');
 }

jonas.location = 'Portugal'; // to add new properties in an object using . operator
jonas['Twitter']= '@jonas'; // to add new property using [] operator 

console.log (jonas);

*/

//console.log(`${jonas.firstName} has ${jonas.friends.length} friends , and his bestf is called ${jonas.friends[0]}`);

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//console.log("Try programiz.pro");

// lec 43

// . operator in js vs [] operator in js

// const jonas = {
//     firstName : 'Jonas',
//     lastName : 'Schmedtmann',
//     birthYear :  1991,
//     age: 2037-1991,
//     job : 'Teacher',
//     friends : ['Micheal','Peter','Steven'],
//     hasDriversLicense :true,
// }

// console.log(jonas.friends);
// console.log(jonas['lastName']);

// const nameKey = 'Name';

// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// const interestedIn = prompt('What do you want to know about jonas schemedtman , chosse between firstName , lastName , age, job, and friends');

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// }else{
//     console.log('Error property does not exist')
// }

// adding new properties to the objects

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// Challenge

// console.log(`Jonas has ${jonas.friends.length} and his bestfriend is called ${jonas.friends[0]}`);

// lec 44 object methods

// const jonas = {
//     firstName : 'Jonas',
//     lastName : 'Schmedtmann',
//     birthYear :  1991,
//     // age: 2037-1991,
//     job : 'Teacher',
//     friends : ['Micheal','Peter','Steven'],
//     hasDriversLicense :true,

//     // calcAge: function(birthYear){
//     //     return 2037 - birthYear;
//     // }

//     // this == jonas  this refers to jonas
//     calcAge: function(){
//         // console.log(this);
//         // return 2037 - this.birthYear;

//         this.age = this.birthYear;
//         return this.age;
//     }

//     getSummaryy: function(){

//         // This is interpreted as `return;` with no value returned

//         return `${this.firstName} is a ${this.calcAge()} -years old ${jonas.job} and he has ${this.hasDriversLicense ? 'a' :'no'} driivers license.`

//     }

// };

// const jonas = {
//     firstName : 'Jonas',
//     lastName : 'Schmedtmann',
//     birthYear : 1991,
//     job : 'Teacher',
//     friends : ['Micheal', 'Peter', 'Steven'],
//     hasDriversLicense : true,

//     calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummaryy: function(){
//         return `${this.firstName} is a ${this.calcAge()} -years old ${jonas.job} and he has ${this.hasDriversLicense ? 'a' :'no'} driivers license.`;
//     }
// };

// console.log(jonas.getSummaryy);

// console.log(jonas.calcAge());
// console.log(jonas.calcAge());re
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());

// challenge question

/*
const mark ={
    
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    
   calcBMI : function(){
       
      this.bmi =  this.mass/this.height **2;
     return this.bmi;

   }
}

const john = {
    
    fullName: 'John Smith',
    mass:92,
    height: 1.95,
    
     calcBMI : function(){
       
      this.bmi = this.mass/this.height **2;
     return this.bmi;

   }
 }

 mark.calcBMI();
 john.calcBMI();
 
 console.log(john.bmi , mark.bmi);

 */

//    if (calcBMI > calcBMI2) {
//        console.log(`Mark Miller's BMI ${Mark.calcBMI} is higher than John Smith's BMI`)
//    } else {
//        console.log(`John Smith's BMI ${john.calcBMI2} is higher than Mark Miller's ${Mark.calcBMI} BMI `);
//    }

//    if (BMI > BMI2) {
//        console.log(`Mark Miller's BMI ${Mark.calcBMI} is higher than John Smith's BMI`)
//    } else {
//        console.log(`John Smith's BMI ${john.calcBMI2} is higher than Mark Miller's ${Mark.calcBMI} BMI `);
//    }

// v46

// for loop

// for ( let rep = 1; rep <= 10; rep++){
//     console.log(`Lifiting Weights ${rep}`);
// }

// v46

// looping thorugh array

// const jonas = [
// //     'Jonas',
// //     'Schmedtmann',
// //     2037- 1991,
// //     'Teacher',
// //     ['Micheal','Peter','Steven']
// // ];

// const types = [];

// for(let i =0 ; i < jonas.length ; i++){
//     console.log(jonas[i] , typeof jonas[i]);

//     // filling in types array
//     // types[i] = typeof jonas[i];

//     types.push(typeof jonas[i]);

// }

// console.log(types);

// const years=[1991,2007,1969,2020];
// const ages = [];

// for(let i = 0; i < years.length ; i++){
//     ages.push(2037-years[i]);
// }

// console.log(ages);

// continue statement ( used to ignore some statments)

// console.log('_____ONLY STRINGS_____')
// for(let i =0 ; i < jonas.length ; i++){
//     if(typeof jonas[i] != 'string') continue;
//     console.log(jonas[i] , typeof jonas[i]);

// }

// // break statement ( used to terminate the loop)
// console.log('___Break With Number____')
// for(let i =0 ; i < jonas.length ; i++){
//     if(typeof jonas[i] != 'number') break;
//     console.log(jonas[i] , typeof jonas[i]);

// }

// 47

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'Teacher',
//   ['Micheal', 'Peter', 'Steven'],
// ];

// for (let i = jonas.length-1 ;i >=0 ;i--){
//     console.log(jonas[i]);
// }

// v 48
// while loop

// for ( let rep = 1; rep<= 10;rep++){
//    console.log(`Lifting weights reptition ${rep}`);
// }

// let rep = 1;
// while(rep<=10){
//     console.log(`Lifting Weights ${rep}`);
//     rep++;
// }

// let dice =Math.trunc(Math.random()*6)+1;
// console.log(dice);

// let dice =Math.trunc(Math.random()*6)+1;

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice =Math.trunc(Math.random()*6)+1;
//     if(dice===6) console.log('Loop is about to end ');
// }

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }

//   /* Write your code below. Good luck! 🙂 */

//   const bills =[22, 95,176,440,37,105,10,1100,86,52];
//   const tips =[];
//   const totals =[];

//   for(let i = 0 ; i < bills.length ; i++){
//       tips[i]=calcTip(bills[i]);
//       totals[i]=tips[i]+bills[i];

/*
const tip = calctip(tips[i]);
tips.push(tips);
tips.push(tips+bills[i]);
console.log(bills,tips,totals);
*/
//   }

//   console.log(tips);
//   console.log(totals);

// Bonus

// const arr =[1,2,3,4,5,6,7,8,9,10];

// const calAverage = function(arr){
//     let sum = 0;
//     for (let i = 0 ; i < arr.length;i++){
//         sum= sum+ arr[i];
//     }
//     return sum/arr.length;
//     // console.log(sum);
// }

// console.log(calAverage([1,2,3]));
// console.log(23);

// calAge : function (birthYear) {
//     return 2037 - birthYear;
//      we find function expression to create this method
//     any function that is attachted to an object is called method

// }

// calAge : function (){
//     console.log(this); // this will point towards jonas
//     return 2037- this.birthYear;
// }
// 'this' is equal to the object on which the method is called

// calAge: function (){
//     this.age  = 2037 - this.birthYear;
//     return this.age;
// } ,

// getSummary: function() {
//     return `${this.firstName} is a ${this.calAge()} - years old ${jonas.job} , and he has ${this.hasDriversLicense ? 'a' : 'no' }
//     driver's license .`}

// };

// console.log (jonas.calAge());//  object jonas calling the method
// console.log (jonas.age);
// console.log (jonas.age);
// console.log (jonas.age);

//  console.log(jonas.calAge());

// whatever appears before the dot is the one who is calling the method

// console.log(jonas['calAge'](1991)); // need to pass only in string while using [] function

// calAge : function () {
//     console.log(this);
//     return 2037 - jonas.birthYear;
// }

// Challenge
// "Jonas is 46 - year old teacher , and he has a drivers license "

//   console.log(jonas.getSummary());

// function callback() {
//   console.log('5 seconds have passed');
// }

// let p = setTimeoutPromisified(5000);
// console.log(p);

// function x1() {
//   //   var i = 1;
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   //   setTimeout(function () {
//   //     console.log(i);
//   //   }, 3000);
//   console.log('Namaste Javascript');
// }
// x1();

// function statement

a();
b();

function a() {
  console.log('a called');
}

// function expression

var b = function () {
  console.log('b called');
};

b();
