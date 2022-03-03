let apples: number = 5;
let desct: string = 'descrption';

const hasPermissions: boolean = false;
const undef: undefined = undefined;

// let speed: string = 10 -> error
// apples = "3" -> ts error

let now: Date = new Date();

//array
let colors: string[] = ['red', 'green'];
const truths: boolean[] = [true, true, false];

//Classes
class Car {}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations

// 1) Function that returns the 'any' type
const json = '{"x" : 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); //any

// 2) When we declare a variable on one line and init it later
const words = ['red', 'green', 'blue'];
let found: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    found = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-1, -10, 12];

let numberAboveZero: boolean | number = false;

for (let i = 0; i<numbers.length; i++){
    if (numbers[i] > 0){
        numberAboveZero = numbers[i]
    }
}
