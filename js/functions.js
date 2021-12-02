//Notes
/*
let isAtBar = true,
    bac = .07,
    age = 22,
    cashOnHand = 10.32;

let canHaveADrink = (bac < .08 && age >= 21 && cashOnHand > 5.00);

if (isAtBar && canHaveADrink) {
    console.log('cheers mate!');
} else if (!isAtBar && canHaveADrink) {
    console.log("Cheers mate, here\'s a to go cup");
} else {
    console.log('sorry mate, you can\'t have a drink');
}
console.log(canHaveADrink);*!/


//functions
//fucnction def contains perameters, when you call the function you pass arguements.

// function canWeFlyToday(cloud, numOfPlanesToFly) {
//     if (!cloud && numOfPlanesToFly < 10) {
//         console.log('Today is a good day to fly');
//     } else {
//         console.log('Today is no bueno');
//     }
// }
//
// canWeFlyToday(false, 5);

//return function


function getFullName(firstName, lastName){
    return firstName + " " + lastName;
}
let fullName = getFullName('mario', 'granados');

console.log(fullName);



//add
let sumOfTwoNum = function (a, b) {
    return a + b;ls
}, diffOfTwoNum = function (a, b) {
    return a - b;
}, productOfTwoNum = function (a, b) {
    return a * b;
}, dividendOfTwoNum = function (a, b) {
    return a / b;
}, remainderOfTwoNum = function (a, b) {
    return a % b;
}

let a = 10,
    b = 5;

console.log(a + " + " + b + " = " + sumOfTwoNum(a, b));
console.log(a + " - " + b + " = " + diffOfTwoNum(a, b));
console.log(a + " * " + b + " = " + productOfTwoNum(a, b));
console.log(a + " / " + b + " = " + dividendOfTwoNum(a, b));
console.log(a + " % " + b + " = " + remainderOfTwoNum(a, b));*!/

//Conditionals

//In plain English, what would change in your outfit if it were: sunny vs rainy vs snowy

//I would wear a jacket if its snowy, take an umbrella if it were raining, if its sunny I would dress normal.
//let weather = 'sunny',
  //  outfit;



//if statement
// if weather is funny,wear a shirt

if (weather === 'sunny') {
    console.log('Wear a shirt');
} else if (weather === 'snowy') {
    console.log('Wear a Sweater');
} else if (weather === 'snowy') {
    console.log("bring an umbrella");
} else {
    console.log('Wear Whatever');
}

//condition ? if true - do this : if not true - do this
// (condition) {tru do this} else {do this}



4 == '4' ? console.log('matches') : console.log('not Matches');




let myAge = 21,
    actualAge = 21;

function checkAge(givenAge, realAge) {
//if/else
    if (myAge === actualAge) {
        console.log('yes this is my actual age');
    } else {
        console.log('no this is not my age');
    }
}

checkAge(myAge, actualAge);

function whatIsMyGrade(grade) {
    if (grade <= 100 && grade >= 90) {
        console.log(' your grade is an A');
    } else if (grade >= 80) {
        console.log(' your grade is a B');
    } else if (grade >= 70) {
        console.log(' your grade is a C');
    } else if (grade >= 60) {
        console.log(' your grade is a D');
    } else {
        console.log(' you failed, try next time');
    }
}

let edgar = 100, steve = 87, steph = 67, lizzy = 97, bruno = 0;

console.log('these are the grades');
whatIsMyGrade(edgar);
whatIsMyGrade(steve);
whatIsMyGrade(steph);
whatIsMyGrade(lizzy);
whatIsMyGrade(bruno);



// = vs == vs ===


let myVar = 9;
console.log(myVar);

if (1 == '1') {
    console.log("i'm hungry");
} else {
    console.log('not hungry')
}
*/


//ifelse3rd


/*let number = 50;

function checkGrade(num) {
    num >= 90 ? console.log('A')
        : num >= 80 ? console.log('B')
            : num >= 70 ? console.log('C')
                : num >= 60 ? console.log('D')
                    : console.log('you failed');

}*/


//swich statements

/*
let grade = 'Z';
switch (grade) {
    case 'A':
        console.log("A");
        break;
    case 'B':
        console.log("B");
        break;
    case 'C':
        console.log('C');
        break;
    case 'D':
        console.log('D');
        break;
    default:
        console.log('please enter a grade');
}

///Morning asignmnent

let bowling = function (score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

let scores = function (bestScore) {
    return (bestScore % 3 === 0 || bestScore % 5 === 0);
}
let lowerCaseSplit = function (str) {
    str = str.toLowerCase().split('')
    return str;
}
let returnTypeOf = function (x) {
    return typeof (x);
}

function executeAllFunctions(average, bestScore, string, a, b, c, d) {
    console.log(average);
    console.log(bestScore);
    console.log(string);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

let score = 109;
let name = 'bowling is fun';
let isBowlingFun = true;
let players = ['tom', 'jerry', 'garfield'];

executeAllFunctions(
    bowling(45, 39, 88),
    scores(20),
    lowerCaseSplit('wHo Let The DOGgos out?'),
    returnTypeOf(score),
    returnTypeOf(name),
    returnTypeOf(isBowlingFun),
    returnTypeOf(players)
);

let myFunction = function (firstName, lastName) {

    return firstName + '' + lastName;
}


function thatsNotMyName(name) {
    if (name == 'Laura') {
        return "that's me!, I'm " + name;
    } else {
        return "that's not my name";
    }
}

console.log(thatsNotMyName('Laura', 'Something'));


function giveMe5() {
    return 5;
}


function showfive(num) {
    console.log(num);
}

var storage = giveMe5();

showfive(storage);*/


"use strict"

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return name;
}

console.log(sayHello('Hello CodeUp'));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
console.log(sayHello("Mario"));

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = 'Mario';

console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(num) {
    return num === 2;
}

console.log(isTwo(random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(percent, billTotal) {
    return billTotal = billTotal * (percent * .100);
}


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// let amountTipped = prompt("How much do you want to tip?");
// alert(
//     "you tipped: " +
//     calculateTip(amountTipped, 20)
// );

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(price, discount) {
    return price *= discount;
}

let originalPrice = 100,
    discount = .2;
console.log(applyDiscount(originalPrice, discount));

//function Drills
//
// # Function Drills
//
// Functions using conditionals but not loops or arrays:
//
//     - Make a function named `isOdd(number)`
let number = 4;
console.log('number is : ' + number);

function isOdd(number) {
    if (number % 2 != 0) {
        console.log('number is odd: ')

    } else {
        console.log('number is even');

    }
}

isOdd(number);

// - Make a function named `isEven(number)`
function isEven(number) {
    if (number % 2 == 0) {
        console.log('number is even');
    } else {
        console.log('number is odd')
    }
}

isEven(number);
// - Make a function named `identity(input)` that returns the input exactly as
// provided.
let identity = function (input) {
    return input;
}
console.log("number is " + identity(number));

// - Make a function named `isFive(input)`
function isFive(input) {
    if (input === 5) {
        console.log('it is equal to five');
    } else {
        console.log('it is not equal to five');
    }
}

isFive(number);

// - Make a function named `addFive(input)` that adds five to some input.
function addFive(input) {
    return input + 5;
}

console.log(addFive(number));

// - Make a function named `isMultipleOfFive(input)`
function isMultipleOfFive(input) {
    if (input % 5 == 0) {
        console.log(input + ' is a multiple of five');
    } else {
        console.log(input + ' is not a multiple of five');
    }
}

isMultipleOfFive(number);

// - Make a function named `isThree(input)`
function isThree(input) {
    if (input === 3) {
        console.log(input + ' is equal to three');
    } else {
        console.log(input + ' is not equal to three');
    }
}

isThree(number);

// - Make a function named `isMultipleOfThree(input)`
function isMultipleOfThree(input) {
    if (input % 3 === 0) {
        console.log(input + 'is multiple of Three');
    } else {
        console.log(input + ' is not a multiple of three');
    }
}

// - Make a function named `isMultipleOfThreeAndFive(input)`
function isMultipleOfThreeAndFive(number) {
    if (number % 5 === 0 && number % 3 === 0) {
        console.log('number is multiple of five AND three');
    } else {
        console.log('number is not a multiple of five AND Three');
    }

}

// - Make a function named `isMultipleOf(target, n)` which checks if target is
function isMultipleOf(target, n) {
    if (target % n === 0) {
        console.log('number is divisible by ' + n);
    }
}

// evenly divisible by `n`
var n = 5;
isMultipleOf(number, n);

// - Make a function named `isTrue(boolean)`
function isTrue(bool) {
    if (bool === true) {
        console.log(bool);
    }
    else console.log(false);
}

isTrue(boolean);
// - Make a function named `isFalse(boolean)`
// - Make a function named `isTruthy(input)`, remember that values other than true
// will behave like true
// - Make a function named `isFalsy(input)`, remember that values other than false
// behave like false
// - Make a function named `isVowel(letter)`
// - Make a function named `isConsonant(letter)`
// - Make a function named `isCapital(letter)`
// - Make a function named `isLowerCase(letter)`
// - Make a function named `hasLowerCase(string)` that returns if a string has any
// lower cased letter
// - Make a function named `isSpace(letter)` that returns if a character is a space
// character
// - Make a function named `isZero(number)`
// - Make a function named `notZero(input)` that returns true if the input is not
// zero
// - Write a function named `lowerCase(string)`
// - Write a function named `double(n)` that returns a number times two
// - Write a function named `triple(n)` that returns a number times 3
// - Write a function named `quadruple(n)` that returns a number times 4
// - Write a function named `half(n)` that returns 1/2 of the provided input
// - Write a function named `subtract(a, b)` that returns `a` minus `b`
// - Write a function named `multiply(a, b)` that returns the product of `a` times
//     `b`
// - Write a function named divide(a, b) that returns `a` divided by ~b~
//     - Write a function named `remainder(a, b)` that returns the remainder after
// dividing a by b
// - Make a function named `modulo(a, b)` that returns the returns the remainder
// after dividing a by b
// - Write a function named `cube(n)` that returns n * n * n
// - Write a function named `squareRoot(n)` that returns the square root of the
// input
// - Write a function named `cubeRoot(n)` that returns the cube root of the input
// - Write a function named `invertSign(number)` that returns a negative version of
// a postive number, a positve version of negative, and false for all else.
// - Write a function named `degreesToRadians(number)`
// - Write a function named `radiansToDegrees(number)`
// - Make a function named `isBlank(input)` that determines if a given input is
// spaces, newline characters, or tabs.
// - Make a function named `trim(string)` that removes empty spaces before and
// after the input.
// - Make a function named `areEqual(input1, input2)` that returns if both inputs
// have the same value
// - Make a function named `areIdentical(input1, input2)` that returns if both
//     inputs are same value and data type.
// - Make a function named `not(input)` returns the input with a flipped boolean
// - Make a function named `notNot(input)` that the negation of the negation of the
// input.
// - Make a function named `and(predicate1, predicate2)` that returns the logical
// opation of OR
// - Write a function called `reverseString(string)` that reverses a string
// - Make a function named `absoluteValue(number)` that returns the absolute value
// of a number.
// - Make a function named `rollDice(sides)` that takes in an argument containing
// the number of sides the die should have. Generate a random number between 1 up
// to and including the number of sides.
//
//
//
//     ## Simple Function Drills
//
// 1. Make a function called returnTwo() that returns the number 2 when called
//
// Test this function with `console.log(returnTwo())`
//
//     1. Make a function called sayHowdy() which console.logs the string “Howdy!”
//
//    Test this function by directly calling `sayHowdy()`
//
// Remember this function does not need a defined return value
//
// 1. Make a function called returnName() that returns the string of your name
//
// Test this function with `console.log(returnName())`
//
//     1. Make a function called addThree() which takes in a number input and returns the number plus 3.
//
// Test this function with `console.log(addThree(5))`
//
//     1. Make a function called sayString() which returns the string input passed in.
//
// Test this function with `console.log(sayString('codeup'))`
//
//
//     ## Challenge Function Drills
//
// - Write a function called `identity(input)` that takes in an argument called
// input and returns that input.
//
// - Write a function called `getRandomNumber(min, max)` that returns a random
// number between min and max values sent to that function call.
//
// - Write a function called `first(input)` that returns the first character in the
// provided string.
//
// - Write a function called `last(input)` that returns the last character of a
// string
//
// - Write a function called `rest(input)` that returns everything but the first
// character of a string.
//
// - Write a function called `reverse(input)` that takes a string and returns it
// reversed.
//
// - Write a function called `isNumeric(input)` that takes an input and returns a
// boolean if the input is numeric.
//
// - Write a function called `count(input)` that takes in a string and returns the
// number of characters.
//
// - Write a function called `add(a, b)` that returns the sum of a and b
//
// - Write a function called `subtract(a, b)` that return the difference between
// the two inputs.
//
// - Write `multiply(a, b)` function that returns the product
//
// - Write a `divide(numerator, denominator)` function that returns a divided by b
//
// - Write a `remainder(number, divisor)` function that returns the remainder left
// over when dividing `number` by the `divisor`
//
// - Write the function `square(a)` that takes in a number and returns the number
// multiplied by itself.
//
// - Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
// and your square function and not + or * operators
//
// - Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
// first parameter is the name of the math function you want to apply. a and b
// are the two numbers to run that function on.
//
// ## Even More Function Bonuses
//
// 1. Create a function that will return how many whitespace characters are at the
// beginning and end of a string.
//
// 1. Create a function that takes in two string inputs.
//
// - If the second string input is present in the first, return the first input
// string with the second input string removed from it.
// - If the second string input is present multiple times in the first, the
// second string will only be removed where it first occurs in the first
// string.
// - If the second string input is not present in the first, return the first
// string as entered in the function.
//
// 1. Create a function that takes in a string and returns true if the last letter
// is an "a" (otherwise, return false).
//
// 1. EXTRA CHALLENGE: create a function that will return how many whitespace
// characters are at the beginning of a string (hint: use regex).
//
// 1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"
//
// - Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"
// - Create a function `returnMessage()` that takes in a function and returns the call to the function
// - Experiement passing in different functions.
//
// 1. Create a function, `willLoginUser()` that takes in a username string,
//     password string, user age, a boolean indicating if they are an admin.
//
//     The function will return true if the username is not the same as the
// password and the user is at least 18 years old. If the user is an admin,
//     they do not have to be a certain age but the password must still not match
// the username.
//     eration of AND
// - Make a function named `or(predicate1, predicate2)` that returns the logical
// oper

