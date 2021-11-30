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


let number = 50;

function checkGrade(num) {
    num >= 90 ? console.log('A')
        : num >= 80 ? console.log('B')
            : num >= 70 ? console.log('C')
                : num >= 60 ? console.log('D')
                    : console.log('you failed');

}


//swich statements

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
    return score1 + score2 + score3 / 3;
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

function executeAllFunctions(average, bestScore, string, x) {
    console.log(average);
    console.log(bestScore);
    console.log(string);
    console.log(x);

}

let score = 109;
let name = 'bowling is fun';
let isBowlingFun = true;
let players = ['tom', 'jerry', 'garfield'];

executeAllFunctions(
    bowling(10, 10, 10),
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
