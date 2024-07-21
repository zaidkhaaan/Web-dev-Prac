
/*
let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Jonas');


let year;
console.log(year);
console.log(typeof year);

year=1991;
console.log(typeof year);

console.log(typeof null);
*/
  
/*
const now =2037;
const ageJonas=now-1991;
const ageSarah=now-2018;
console.log(ageJonas ,ageSarah)

console.log(ageJonas*2,ageJonas/10,2**3)

const firstName= 'Zaid';
const lastName ='Khan';
console.log(firstName+' '+lastName);

let x = 10+5;
x+=10;
x*=4;
x++;
x--;
x--;

console.log(x);

console.log(ageJonas>ageSarah);

console.log(ageSarah>=18);

const isFullAge =ageSarah>=18;

console.log(now-1991 > now -2018);
*/


/*
let x , y
x=y=25-10-5; // chat gpt 
console.log(x,y)
*/


/*
const firstName='jonas';
const job='teacher';
const birthYear=1991;
const year= 2037;

const jonas ="I'm " + firstName + ',a '+ (year-birthYear) + ' year old' + job + ' !';
console.log(jonas);
                                                  
const jonasNew =` Im ${firstName} ,a ${year-birthYear}  year old  ${job}   ! `; 
console.log(jonasNew);


console.log('Just an regular String')

console.log('String with \n\
multiple \n\
lines');

console.log(`String 
multiple 
lines`);
*/

/*
const age =15;
if(age>=18){
    console.log('Sarah can drive and have a license');
} else{
    const yearsLEFT=18-age;
    console.log(`Sarah is too young.Wait another ${yearsLEFT} years :) `);
}
*/


/*
const birthYear =2012;

let century;
if( birthYear <= 2000){
     century = 20;
}else{
     century = 21;
}
console.log(century)
*/

/*
//  type conversion ( done manually ) & type Coercion (done implicitly)

const inputYear ='1991';
console.log(Number(inputYear) ,inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23),23);

// type coercion
console.log('I am ' + 23 +' years old');

// template literals
console.log('23' -'10'-3);
console.log('23'*'2');
console.log('23' / '2');

// guess the game

let n = '1'+1; //'11'
n=n-1;   // 11-1
console.log(n);  //10
*/



// truthy and falsy values
// 5 flasy values :0 , '', undefined, null, NaN


/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money =0;

if(money){
 console.log("Don't spend it all")
}else{
    console.log('You should get a job ')
}


let height;
if(height){
    console.log('YAY ! Height is defined')
}else{
    console.log('Height is undefined')
}

*/

/*
const age ='18';
// == used for number & string comaprison  &
 ===(strict operator )  used for only number comparison      
if(age === 18) console.log('You just become an adult :D (strict)');
if(age == 18) console.log('You just become an adult :D (loose)');
*/



/*

const fav = Number(prompt("whats your fav number"));
console.log(fav);23
console.log(typeof fav);

if(fav === 23){
    console.log('Cool ! 23 is an amazing number !')
}else if(fav === 7){
     console.log('7 is also a cool number')
}else if(fav === 9){
    console.log('9 is also a cool number')
}else{
    console.log('Number is not 23 or 7 or 9')
}

if(fav !== 23) console.log('Why not 23');

 */


/*
const hasDriversLicense = true;
const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision){
//     console.log('Sarah is able to drive')
// }else{
//     console.log('Someone else should drive')
// }


const isTired= false;
//console.log(hasDriversLicense && hasGoodVision && isTired);


if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive')
}else{
    console.log('Someone else should drive')
}

*/

/* Write your code below. Good luck! 🙂 */


/*
const game1 = 10;
const game2 = 7;
const game3 = 8;

let scoreDolphins = game1+game2+game3 / 3
console.log (scoreDolphins);


const game1koals = 10;
const game2koals = 10;
const game3koals = 9;

let scoreKoals = game1koals+game2koals+game3koals / 3
console.log (scoreKoals);

if(scoreDolphins > scoreKoals && scoreDolphins >= 100){
    console.log('"Dolphins win the trophy"')
}else if (scoreKoals > scoreDolphins && scoreKoals >= 100){
    console.log('"Koalas win the trophy"')
}else if ( scoreDolphins === scoreKoals && scoreDolphins >= 100 && scoreKoals >= 100){
    console.log('"Both win the trophy"')
}else{
    console.log('No one won the trophy ')
}

*/



/*

const day ='friday';

if( day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');

}else if ( day === 'tuesday'){
    console.log('Prepare theory vedios')
}else if( day === 'wednesday' || day ==='thursday'){
    console.log('write code examples')
}else if ( day === 'friday'){
    console.log('Record Vedios')
}else if ( day === 'saturday' ||  day ==='sunday'){
    console.log('Enjoy Weekend')
}else{
    console.log('Not a valid day')
}
// this is to check on git 

*/

// const bill = 275;
// let tip;
// /* Write your code below. Good luck! 🙂 */
   
// if (bill > 50 && bill <=300){
//      tip = 0.15 * bill;
// } else if ( bill > 300){
//      tip = 0.20 * bill;
// }

// let billamount;
// billamount = bill+tip;
// console.log("The bill was" &{bill}, "the tip was" &(tip), "and the total value" &{billamount} );































