'use strict';

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');

// const btnsOpenModal = document.querySelectorAll('.show-modal');

// const openModal = function () {
//   console.log('Button clicked');
//   modal.classList.add('hidden');
//   modal.classList.add('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   modal.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// clearInterval();

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArr = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year :2017,
// };

// matilda.calcAge=jonas.calcAge;
// // method borrowing
// matilda.calcAge(); // the this keyword now points towards the maltida object

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// var firstName = 'Matlida';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

// solution 1
// const self = this;
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };

// soltuion 2

//     const isMillenial = () => {
//       // it works as it gets object from it parent scope
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();
// jonas.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => a + b;

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

// let age = 30;
// let oldage = age;
// age = 31;

// console.log(age);
// console.log(oldage);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// // points towards the same object in the memeropry heap

// console.log('Friend:', friend);
// console.log('Me', me);

clearInterval();

// primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Devis';
// console.log(lastName, oldLastName);

// // refernce variable

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before Marriage :', jessica);
// console.log('After Marriage', jessica);

// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// shallow copy using object . assign

// const jessicacopy = Object.assign({}, jessica2);
// jessicacopy.lastName = 'Davis';

// console.log('Before marriage', jessica2);
// console.log('After Marriage', jessicacopy);

// jessicacopy.family.push('Mary');
// jessicacopy.family.push('John');

// console.log('Before Marriage', jessica2);
// console.log('After Marriage', jessicacopy);

// functions

// const flight = 'LH123';

// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 2412345,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 2412345) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, jonas);
// // console.log(flight);
// console.log(jonas);

// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// function getName() {
//   console.log('Namaste Javascript');
// }

// const age = 23;
// const name = 'zaid';

// function greet(age, name) {
//   console.log(`Hey your name is ${name} and age is ${age}`);
// }

// greet(age, name);

// let user = {
//   name: 'harkirat',
//   age: 19,
//   gender: 'Male',
// };
// function greet(user) {
//   console.log(`Hi Mr ${user.name},${user.age}, and ${user.gender}`);

//   if (user.age >= 18) {
//     console.log('You can vote');
//   } else {
//     console.log('You cannot');
//   }
// }
// greet(user);

// const arr = [1, 2, 3, 4, 5, 6];

// function isEVEN(number) {
//   return number % 2 == 0;
// }

// const EvenNumber = arr.filter(isEVEN);

// console.log(EvenNumber);

const users = [
  {
    name: 'Harkirat',
    age: 21,
    Gender: 'F',
  },
  {
    name: 'ZJP',
    age: 19,
    Gender: 'M',
  },
  {
    name: 'ZAIN',
    age: 17,
    Gender: 'M',
  },
];

function lol(users) {
  users.forEach(users => {
    if (users.age >= 18 && users.Gender === 'M') {
      console.log(users);
    }
  });
}

console.log(lol(users));
lol(users);
/*
function lol(users) {
  users.forEach(user => {
    if (user.age >= 18) {
      console.log(user);
    }
  });
*/
