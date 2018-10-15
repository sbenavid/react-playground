//import './utils';
import substract, { square, add } from './utils';
import { isAdult, canDrink } from './person';
import validator from 'validator';


console.log('Corriendo mi app');

console.log(square(5));

console.log(add(100,23));

console.log(substract(40,20));

console.log(isAdult(29) && canDrink(29));
console.log('----')
console.log(validator.isEmail('sbne@gmail.com'));
