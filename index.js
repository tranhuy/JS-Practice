// const Sound = (sound) => {
//     console.log("Make sound:", sound);
// }

// Sound("Bark");

// const CatSound = Sound;
// CatSound("Meow");

// const arr = [1, 2, 3, 4, 5];

// const doubleArr = arr.map((ele, index, arr) => ele * 2);

// doubleArr.forEach(value => console.log(value));

// console.log(doubleArr);

/*HIGHER ORDER FUNCTION */
// const mapStrToLength = (arr, callbackFn) => {
//     const newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(callbackFn(arr[i]));
//     }

//     return newArr;
// }

// const strArr = ['Huy', 'Jessica', 'Rachel', 'Amanda'];

// const lengthArr = mapStrToLength(strArr, ele => ele.length);

// console.log(lengthArr);

/*CURRY FUNCTIONS*/
// const MakeCake = (ingredient1, ingredient2, ingredient3) => {
//     return (
//         ingredient1 + ", " + ingredient2 + ", " + ingredient3
//     );
// }

// function curry1(fn) {
//     return function (ingredient1) {
//         return function (ingredient2) {
//             return function (ingredient3) {
//                 return fn(ingredient1, ingredient2, ingredient3);
//             }
//         }
//     }
// }

// const curry2 = fn => ingredient1 => ingredient2 => ingredient3 => fn(ingredient1, ingredient2, ingredient3)

// const curryMakeCake = curry2(MakeCake);
// const cake = curryMakeCake('flour')('sugar')('icing');

// const cakeIngredient1 = curryMakeCake('flour');
// const cakeIngredient2 = cakeIngredient1('sugar');
// const cakeIngredient3 = cakeIngredient2('icing');

// console.log(cakeIngredient3);

// const AddTitle = (title, firstname, lastname) => {
//     return (
//         title + '. ' + firstname + ' ' + lastname
//     );
// }

// const curryName = fn => title => firstname => lastname => fn(title, firstname, lastname);

// const curryAddTitle = curryName(AddTitle);
// const AddDrTitle = curryAddTitle('Dr');

// console.log(AddDrTitle('Huy')('Tran'));

// const printName = title => firstname => lastname => title + '. ' + firstname + ' ' + lastname;

// const printNameDr = printName('Dr');

// console.log(printNameDr('Huy')('Nguyen'));

/*THIS keyword*/
// function Car(model) {
//     this.make = model;
// }

// const c1 = new Car('Honda');
// const c2 = new Car('Lexus');

// console.log(c1.make);

/*ITERABLES*/

// const name = 'Huy Tran';

// for (const c of name) {
//     console.log(c);
// }

/*CLOSURES*/

// const adder = num1 => num2 => num1 + num2;

// const add5 = adder(5);
// console.log(add5(10));
// console.log(adder(2)(12));

/*FUNCTION BIND METHOD*/

// const obj = {
//     name: 'Huy',
//     getName: function() {
//         return this.name;
//     }
// }

// console.log(obj.getName());

// const getNameRef = obj.getName;

// console.log(getNameRef());

// console.log(getNameRef.bind(obj)());

/*FUNCTION APPLY METHOD*/

// function PrintName(name) {
//     console.log(name + ' ' + this.occupation);
// }

// const obj2 = {
//     // will not work as expected if PrintName2 was arrow function since arrow functions do not have their own this
//     PrintName2(name) {
//         console.log(name + ' ' + this.occupation)
//     }
// }

// const obj = {
//     occupation: 'developer'
// }

// PrintName.call(obj, 'Huy');
// obj2.PrintName2.apply(obj, ['Julie']);

// const person = {
//     fullName: function(name) {
//       console.log(name + " " + this.lastName);
//     }
//   }

//   const person1 = {
//     //firstName: "Mary",
//     lastName: 'Tran'
//   }

// This will return "Mary Doe":
//person.fullName.apply(person1, ['Mary']);

//  globalThis.name2 = 'kfjkds'

//   function User() {
//     let joy = this;
//     let occ = 'Tampy';
//     this.name = "John Doe",
//     this.score = 20,
//     this.sayUser = function () {
//         // when `this` is accessible
//         console.log(this.name);

//         function innerFunction() {
//           // when `this` refers to the global scope/object
//           console.log(joy.name);
//         }

//         innerFunction();
//       };
//   }

//   let name = new User();
//   name.sayUser();

/*PROMISES*/

// let name = 'HuyT';

// const myPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         if (name === 'Huy') {
//             res('success');
//         } else {
//             rej('failed');
//         }
//     }, 3000);
// });

//myPromise.then(ret => console.log(ret)).catch(err => console.log(err));

// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 3000, 'Resolved baby!');
//     });
// }

// const processData = async () => {
//     console.log('processing data');
//     try {
//         const result = await fetchData();
//         console.log(result);
//     } catch (err) {

//     }
// }

// processData();

// const name = 'Huy', age = 10, getName = () => name;

// console.log(getName());

// function testing() {
//     let job = 'admin2';
//     function testing2() {
//         console.log(job);
//     }

//     return testing2;
// }

// const testing3 = testing();

// testing3();

/*ALGORITHM QUESTIONS*/

// KNAPSACK PROBLEM
// const items = [
//   { id: 'a', val: 5, w: 3 },
//   { id: 'b', val: 6, w: 7 },
//   { id: 'c', val: 7, w: 4 },
//   { id: 'd', val: 13, w: 15 },
//   { id: 'e', val: 8, w: 3 }
// ]

// const MAX_WEIGHT = 20;

// const sortedItems = items.sort((a, b) => (a.val/a.w > b.val/b.w) ? -1 : (b.val/b.w > a.val/a.w) ? 1 : 0);

// const bagItems= [];
// let totalBagWeight = 0;

// for (let i = 0; i < sortedItems.length; i++) {
//   if (totalBagWeight + sortedItems[i]['w'] <= MAX_WEIGHT) {
//     bagItems.push(sortedItems[i]['id']);
//     totalBagWeight += sortedItems[i]['w']
//   }
// }

// console.log(bagItems);

// const myArr = [
//   ["Name", "Huy"],
//   ["Age", 40],
//   ["Occupation", "Developer"]
// ]

// console.log(Object.fromEntries(myArr));

/* PROTOTYPES */

// const Person = function() {
//   this.name = 'Huy',
//   this.age = 40,
//   this.job = 'Developer'
// }

// Person.prototype.toString = function () {
//   console.log(`My name is ${this.name}, I'm ${this.age} years old, and I work as a ${this.job}`);
// }

// const p1  = new Person();
// p1.maritalStatus = 'single';
// p1.name = 'John';

// console.log(p1.name);
// console.log(p1.toString());

/* hasOwnProperty */

// const Person = function() {
//   this.name = 'Huy',
//   this.age = 40,
//   this.job = 'Developer'
// }

// const p1  = new Person();
// console.log(p1.hasOwnProperty('job'));

// const p2 = Object.create(p1);
// console.log(p2.job);
// console.log(p2.hasOwnProperty('job'));

// function foo() {}
// foo.prototype.foo_prop = 'foo val';

// function bar() {}

// const proto = new foo();
// proto.bar_prop = 'bar val';
// proto.name = 'Huy';

// bar.prototype = proto;

// const inst = new bar();

// console.log(inst.foo_prop);  //prints 'foo val'
// console.log(inst.bar_prop);
// console.log(inst.name);
// console.log(inst.hasOwnProperty('name'));

/*Given an array of valid property identifiers and an array of values, return an object associating the properties to the values.*/

// const props = ['name', 'age', 'job', 'gender'];
// const values = ['Huy', 40, 'Developer', 'male'];

// const person = props.reduce((obj, val, index) => {
//   	return Object.assign(obj, { [val]: values[index] });
// }, {});

// const person2 = props.reduce((obj, val, index) => {
// 	return Object.assign(obj, ((obj[val] = values[index]), obj));
// }, {});

// const person3 = props.reduce((obj, val, index) => {
// 	return {
// 		...obj, [val]: values[index]
// 	}
// }, {});

//  console.log(person3);

/* Object.keys, Object.values, Object.entries */
// const object1 = {
// 	a: 'somestring',
// 	b: 42
//   };
  
//   for (const [key, value] of Object.entries(object1)) {
// 	console.log(`${key}: ${value}`);
//   }

/* Write a JavaScript function that returns a passed string with letters in alphabetical order. */
// const myString = 'webmaster';

// const sortedString = [...myString].sort((a, b) => (a > b) ? 1 : (b > a) ? -1 : 0);

// console.log(sortedString.join(''));

/*  Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. */
// const myString = 'Web Developmen1 Tutorial Developmen2 Developmen3';

// const stringArr = myString.split(' ');

// const maxLen = Math.max(...stringArr.map(e => e.length));

//console.log(stringArr.filter(e => e.length === maxLen).join(', '));

/* Function which prints callback fuction name */
// function printText() {}

// function getFuncName(func) {
// 	console.log(func.name);
// }

// getFuncName(printText);


/* JEST: UNIT TESTING */

// export const sum = (a, b) => a + b;

// export const subtract = (a, b) => a - b;

// module.exports.sum = sum
// module.exports.subtract = subtract

//module.exports = { sum, subtract }

/* RECURSION: The function should return an array containing repetitions of the number argument. */

// const replicate = (repetition, num) => {

// 	if (repetition <= 0) {
// 		return [];
// 	} else {
// 		return [...replicate(repetition - 1, num), num];
// 	}
// }

// console.log(replicate(3, 9));

/* CREATING AN ITERABLE OBJECT */

const sentence = {
	line: 'This is an iterable!'
}

sentence[Symbol.iterator] = function() {
	return {
		line: this.line,
		current: 0,
		next() {
			let words = this.line.split(' ');
			
			if (this.current < words.length) {
				return {
					done: false, value: words[this.current++]
				}
			} else {
				return {
					done: true
				}
			}
		}
	}
}

// for (let word of sentence) {
// 	console.log(word);
// }


let arr = [1, 2, 3, 4, 5];

let iterator = arr[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());

/* A popcorn costs 7$, a soda costs 2.5$, when bought together they cost 9$.
Given an input list of dates and the name of the items bought, find the total amount spent. All pairs of soda and popcorn should be treated as a bundle if they were bought on the same date, even if they are not bought one after the other. */

const POPCORN_PRICE = 7;
const SODA_PRICE = 2.5;
const BUNDLE_PRICE = 9;

const invoice = [
    {
        popcorn: 32,
        soda: 18
    },
    {
        popcorn: 5,
        soda: 8
    },
    {
        popcorn: 52,
        soda: 22
    },
    {
        popcorn: 32,
        soda: 14
    }
]

let total = invoice.reduce((total, current) => {
	const { popcorn, soda } = current;
	let bundleTotal = Math.min(popcorn, soda) * BUNDLE_PRICE;
	let nonBundleTotal = Math.abs(popcorn - soda) * (popcorn > soda ? POPCORN_PRICE : SODA_PRICE)

	return total + bundleTotal + nonBundleTotal;
}, 0);

//console.log(total);

/* DEFINE FUNCTION ON ARRAY PROTOTYPE WHICH TAKES A CALLBACK AS A PARAMETER */
// Array.prototype.iterate = function (callback) {
// 	for (let ele of this) {
// 		callback(ele);
// 	}
// }

// let myArr = [1, 2, 3, 4, 5, 6, 7];

// myArr.iterate(current => {
// 	console.log(current * 2);
// });

/* GENERATORS */

function *getId() {
	let id = 1;

	while (true) {
		const increment = yield id;  //any params passed to next function is return in yield statement
		if (increment != null) {
			id += increment;
		} else {
			id++;
		}
		yield id;
	}
}

// const generator = getId();
// console.log(generator.next());
// console.log(generator.next(5));

/* FLATTEN AN ARRAY */

let myArr = [
	[1, 2, 3], [4, 5], [6, [7, 8], 9], [10, [11, [12, 13], 14], 15]
];

//const flatArr = myArr.flat();

let flatArr = [];

for (let ele of myArr) {
	flatArr.push(...ele);
}

// console.log(flatArr);
// console.log([].concat(...myArr));

function customFlat(arr, depth) {
	if (depth == 1) {
		return [].concat(...arr);
	} else {
		return customFlat([].concat(...arr), depth - 1);
	}
}

//console.log(customFlat(myArr, 3));

/* VAR Statement */
// var name = 'Huy';

// const printName = function() {
// 	var name = 'Tran';
// 	console.log(name);
// }
// printName();
// console.log(name);

//var can be either function or global scoped whereas, const and let are block scope

function a() {
	let x = 0;
	for (var i = 0; i < 3; i++) {
		setTimeout(() => {
			i = x++;
			console.log(i);
		}, i * 1000);
	}
}

//a();

/* COMPOSE AND PIPE FUNCTIONS */

const add5 = a => a + 5;
const subtract10 = b => b - 10;
const multiply3 = c => c * 3;

const compose = (...fns) => num => fns.reduceRight((acc, fn) => fn(acc), num);

const compose2 = function(...fns) {
	return function(num) {
		return fns.reduceRight(function(acc, fn) {
			return fn(acc)
		}, num);
	}
}

// console.log(compose(add5, subtract10, multiply3)(20));
// console.log(compose2(add5, subtract10, multiply3)(20));

//Compose function compute from right to left and pipe functions compute from left to right using reduce method instead of reduceRight method

const myFunction = cb => {
	return function (name) {
		cb(name);
	}
}

//const func = myFunction(arg => console.log(arg + ' Tran'))('Huy');

//func('Huy');

/* READING USER INPUT FROM CONSOLE AND PRINTING OUTPUT TO CONSOLE BASED ON INPUT */

// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';

// const rl = readline.createInterface({ input, output });

// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.close();

/* NODE GLOBAL OBJECT */
// globalThis.name = 'Huy';

// let car = {
// 	drive() { console.log(this) }
// }

// car.drive()

/* THIS KEYWORD */
// const obj = {
// 	num: 100,

// 	sum (a, b) {
// 		console.log(this);
// 		return a + b + this.num;
// 	  }	
//   };
  
//   obj.sum2 = function (a, b) {
// 	console.log(this);
// 	return a + b + this.num;
//   }
 
//   console.log(obj.sum2(2, 3));

/* CHAINING OBJECT FUNCTIONS */

let climber = {
	step: 0,

	climbup() {
		this.step++;
		console.log(`Number of steps: ${this.step}`);
		return this;
	},

	climbup2() {
		this.step += 2;
		console.log(`Number of steps: ${this.step}`);
		return this;
	},

	climbdown() {
		this.step--;
		console.log(`Number of steps: ${this.step}`);
		return this;
	}
}

//climber.climbup().climbup2().climbup().climbup2().climbdown();

/* Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote. */

var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) return false;

	let magazineArr = [...magazine];

	for (let letter of ransomNote) {
        let indexInMag = magazineArr.indexOf(letter);

		if (indexInMag < 0) return false;

		magazineArr.splice(indexInMag, 1);
    }

	return true;
};

//console.log(canConstruct('aa', 'aba'));

// function Node(val, next) {
// 	this.val = val;
// 	this.next = next === undefined ? null : next;
// }

// const n3 = new Node(2)
// const n2 = new Node(8, n3);
// const n1 = new Node(12, n2);

/* Swapping array elements */
let unsorted = [ 24, 13, 11, 9, 32 ];

[unsorted[0], unsorted[1]] = [unsorted[1], unsorted[0]];

//console.log(unsorted);

/* Add 2 array */

let arr1 = [9,9,9,9,9,9,9], arr2 = [9,9,9,9];

const addArrays = function(a1, a2) {
	if (a2.length > a1.length) {
		a1 = a1.concat(Array(a2.length).fill(0).slice(0, a2.length - a1.length));
	}

	let carryOver = 0;
	let sumArr = a1.map((val, i) => {
		let sum = val + (a2[i] || 0) + carryOver;
		if (sum >= 10) {
			sum -=10;
			carryOver = 1;
		} else {
			carryOver = 0;
		}

		return sum;
	});

	if (carryOver > 0) {
		sumArr.push(carryOver);
	}

	return sumArr;
}

//console.log(addArrays(arr2, arr1));

/* CHECK IF OBJECTS IS IN AN ARRAY */
let person = {
	name: 'Huy',
	age: 40,
	sex: 'male',
}

let myArr1 = [1, person, 'Joe'];

//console.log(myArr1.includes(person));

/*  Implement enqueue and dequeue using only two stacks */

let queue = [];
let queueOrder = [];

function enqueue(item) {
	if (queue.length > 0) {	
		queueOrder.push(...queue);
		queue = [];
		queue.push(item);
		queue.push(...queueOrder);
		queueOrder = [];
	} else {
		queue.push(item);
	}
}

function dequeue() {
	queue.pop();
}

enqueue('Huy')
enqueue('Amy')
enqueue('Joe')
enqueue('Jordan')
enqueue('Francis')

dequeue();
dequeue();

//console.log(queue);

/* DUPLICATE AN ARRAY */

function duplicate(arr) {
	//return arr.concat(arr);
	return [...arr, ...arr];
}

//console.log(duplicate([1, 2, 3, 4]));

/* CURRY FUNCTIONS */

//const mul = x => y => z => x * y * z;

function mul(x) {
	return function(y) {
		return function(z) {
			return  x * y * z;
		}
	}
}

// console.log(mul(2)(3)(4));
// console.log(mul(4)(3)(4));

// function createBase(x) {
// 	return function(y) {
// 		return console.log(x + y);
// 	}
// }

// const addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

/* Given two strings, return true if they are anagrams of one another */

const isAnagram = function(word1, word2) {
	const w1 = word1.toLowerCase();
	const w2 = word2.toLowerCase();

	let charWord2 = [...w2];

	if (w1.length !== w2.length) return false

	for (const char of w1) {
		let index = charWord2.indexOf(char);
		if (index > -1) {
			charWord2.splice(index, 1);
		} else {
			return false;
		}
	}

	return true;
}

//console.log(isAnagram('Army', 'Mary'));

/* CLOSURES */

function Counter() {
	let count = 0;

	return function Increment(num) {
		count += num;
		return count;
	}
}

const myCounter = Counter();
// console.log(myCounter(43));
// console.log(myCounter(22));
// console.log(myCounter(4));

// class User {
// 	constructor() {
// 		this.name = 'Huy',
// 		this.age = 40
// 	}
	
// 	PrintName() {
// 		console.log(this.name)
// 	}

// 	PrintAge = () => {
// 		console.log(this.age);
// 	}

// 	get getInfo() {
// 		return `${this.name} and I'm ${this.age} years old` 
// 	}
// }

// const u1 = new User();
// u1.PrintName();
// u1.PrintAge();
// console.log(u1.getInfo);

// function User() {
// 	this.name = 'Huy',
// 	this.age = 40

// 	this.PrintAge = () => console.log(this.age);
// }

// const u1 = new User();
// u1.PrintAge();

const isPalindrome = word => {
	return word.split('').reverse().join('') === word;
}

//console.log(isPalindrome('civic'));

// let a1 = 'john'.split('');
// let a2 = a1.reverse();
// let a3 = 'jones'.split('');
// a2.push(a3);

// console.log(a1.slice(-1));


function AddToStart(item, arr) {
	let newArr = [ item, ...arr];
	return newArr;
}

//console.log(AddToStart(88, [1, 2, 3, 4, 5]));

/* CLASS FIELD DECLARATIONS */
class Person {
	// constructor(name) {
	// 	this.name = name;
	// }

	name = 'Joe';  //no longer need to define in constructor function

	PrintName = function() {
		(function() {
			console.log(this);
		})();	
	}

	PrintNameArrow = () => {
		(() => {
			(() => {
				console.log(this.name);
			})();			
		})();
	}
}

const p1 = new Person('Huy');
//p1.PrintName();
//p1.PrintNameArrow();

let myPerson = {
	name: 'Huey',

	PrintName() {
		console.log(this);	
	},

	PrintNameArrow: () => {
		setTimeout(() => {
			console.log(this);
		}, 0)
	}
}

//Object.defineProperty(myPerson, 'age', { value: 30 });
myPerson['age'] = 30;

//console.log(myPerson.age);


// myPerson.PrintName();
 //myPerson.PrintNameArrow();

function myPerson2() {
	this.name = 'Hue';

	this.PrintNameArrow = () => {
		(() => {
			console.log(this.name);	
		})();
	};
}

const pers = new myPerson2();
//pers.PrintNameArrow();

// function test() {
// 	return {
// 		foo: function() {
// 			return console.log('Testing');
// 		}
// 	}
// }

// const t = test().foo();

// const testArrow = () => {
// 	return {
// 		foo: function() {
// 			return console.log('Testing');
// 		}
// 	}
// }

// const tarrow = testArrow().foo();

// const test1 = () => ({
// 	foo: 1
// })

// const test2 = () =>{
// 	return {
// 		foo: 1,
// 	}
// }

// console.log(test2().foo);

// function myFunc() {
// 	return this;
// }

// const aim = myFunc;
// console.log(aim());

// const aim2 = new myFunc();
// console.log(aim2);

// function employee(name) {
// 	this.name = name;
// }

// const e = new employee('Joe');

// console.log(e);

// const myfunc1 = function myfunc2(name) {
// 	console.log(name);
// }

// myfunc1('Huy');
// myfunc2('Tran');

/* CLOSURES AND LEXICAL ENVIR */
// function mytest() {
// 	let count = 0;

// 	return function tesla() {
// 		count++;
// 		console.log(count);
// 	}
// }

// const huy = mytest();
// huy();
// huy();
// huy();

// const huy2 = mytest();

// huy2();
// huy2();

/* INFINITE CURRYING */

function add(a) {
	function adder(n) {
		if (n !== undefined) {
			a += n;
			return adder;
		} else {
			return a;
		}
	}
	
	return adder;
}

//console.log(add(3)(4)(5)());

let calc = {
	total: 0,
	add(n) {
		this.total += n;
		return this;
	},

	subtract(n) {
		this.total -= n;
		return this;
	},

	multiply(n) {
		this.total *= n;
		return this;
	},
}

const result = calc.add(10).multiply(2).subtract(5).add(8);

//console.log(result.total);

/* CONSTRAINT: 1.01 <= bags[n] <= 3 */

function calcTrips(maxWeightPerTrip, ...bags) {
	let tripCount = 1;
	let totalBagWeight = 0;

	for (let n = 0; n < bags.length;) {
		if (totalBagWeight + bags[n] <= maxWeightPerTrip) {
			totalBagWeight += bags[n];
			bags.splice(n, 1);
			n = 0;
		} else if (totalBagWeight <= maxWeightPerTrip - 1.01) {
			if (n === bags.length - 1) {
				bags.splice(0, 1);
				n = 0;
				tripCount++;
			} else {
				n++;
			}			
		} else {
			totalBagWeight = bags[n];
			bags.splice(n, 1);
			n = 0;
			tripCount++;
		}
	}

	return tripCount;
}

//console.log(calcTrips(4, 1.01, 1.99, 1.5, 2.7, 1.2, 1.01, 1.01));

function TreeNode(val, left, right) {
	this.value = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const n8 = new TreeNode(8);
const n9 = new TreeNode(8);
const n10 = new TreeNode(5);
const n11 = new TreeNode(5);
const n4 = new TreeNode(3, n8);
const n5 = new TreeNode(4);
const n6 = new TreeNode(4, undefined, n11);
const n7 = new TreeNode(4);
const n2 = new TreeNode(2, n5, null);
const n3 = new TreeNode(2, null, n7);
const n1 = new TreeNode(1, n2, n3);

const isSymmetric = function (root) {
	let leftTreeNodes = [root.left], rightTreeNodes = [root.right];
	let leftTreeValues = [root.left.value], rightTreeValues = [root.right.value];

	function traverseLeft(nodes) {		
		leftTreeNodes = [];
		leftTreeValues = [];

		for (const node of nodes) {
			leftTreeNodes = [...leftTreeNodes, node?.left || null, node?.right || null];
			leftTreeValues = [...leftTreeValues, node?.left?.value || null, node?.right?.value || null];
		}

		if (leftTreeNodes.some(n => n !== null)) {
			return true;
		}

		return false;
	}
	
	function traverseRight(nodes) {
		rightTreeNodes = [];
		rightTreeValues = [];

		for (const node of nodes) {
			rightTreeNodes = [...rightTreeNodes, node?.right || null, node?.left || null];	
			rightTreeValues = [...rightTreeValues, node?.right?.value || null, node?.left?.value || null];	
		}

		if (rightTreeNodes.some(n => n !== null)) {
			return true;
		}

		return false;
	}

	let isMirror = false;

	function traverseTree() {
		let hasMoreLeft = true;
		let hasMoreRight = true;

		if (leftTreeValues.every((val, i) => val === rightTreeValues[i])) {
			hasMoreLeft = traverseLeft(leftTreeNodes);
			hasMoreRight = traverseRight(rightTreeNodes);

			if (hasMoreLeft && hasMoreRight) {
				traverseTree();
			} else if (hasMoreLeft === false && hasMoreRight === false) {
				isMirror = true;
			} else {
				isMirror = false;
			}
		} else {
			isMirror = false;
		}
	}

	traverseTree();

	return isMirror;

	// console.log('-- LEFT SUBTREE --');
	// traverseLeft(leftTreeNodes);
	//console.log('-- RIGHT SUBTREE --');
	//traverseRight(rightTreeNodes);
}

console.log(isSymmetric(n1));