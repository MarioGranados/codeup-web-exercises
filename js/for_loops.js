//NOTES


//Loops

//While loops

// 20 parking spots open
//1 car driving around
// no idea how many times you need to loop around

// while(condition) {
//     //execute code here


/*let parked = false,
    parkingSpots = 20,
    carsParked = 20,
    numOfloops = 0;

while(!parked){
    if (carsParked === parkingSpots) {
        console.log('theres no parking');
        carsParked--
        numOfloops++;
    }
    else {
        parked = true;
        console.log('you found a parking spot');
        console.log('you did ' + numOfloops + ' loops')
    }
}*/


/*let i = 0; //starting point
let c = 0;
while(i < 10) {
    console.log(i + ' ' + c);
    ++c;
    i++;
    console.log(i + '  ' + c);
}*/

//

/*
let number = 50;
do {
    --number;
    --number;
    console.log(number);
} while (number <= 50);*/

/*let number = 1;
while(number <= 10)
{
    console.log('while loop: ' + number);
    number++
}

let num = 1;

do{
    console.log('do-while loop: ' + num);
    num++;
} while(num <= 10);*/

// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// correct password is given.

/*let pass = prompt('Enter a password');

do {
    alert('wrong password, try again');
    pass = prompt('Enter a password')
} while (pass != 'Code-Up-Password!');

console.log('password sucess!');*/

//for loops

/*for(let i = 0; i <= 15; i+=3) {
    console.log('my favorite number is ' + i);
}*/

/*let dozens = 0;

//4 dozens


for(let i = dozens; i <= 4; i++){
    console.log('dozens: ' + dozens);
    console.log(i);
}*/


//NESTED FOR LOOPS

/*for(let counter = 1; counter <=5; counter++){
    console.log('first counter: ' + counter);
    for(let counterTwo = 5; counterTwo > 0; counterTwo--) {
        console.log('second counter: ' + counterTwo);
    }
}*/


// -------------Exercises---------------

/*function showMultiplicationTable(number) {
    for (let i = 0; i < 10; i++) {
        console.log(
            number + ' x ' + (i + 1) + ' = ' + (number * (i + 1)));
    }
}

showMultiplicationTable(7);

let num;
for (let i = 0; i < 10; i++) {
    num = Math.floor(Math.random() * (200 - 20 + 1) + 20);
    if (num % 2 === 0) {
        console.log(num + ' number is even');
    } else {
        console.log(num + ' number is odd');
    }
}*/

let str = '';
for(let i = 0; i< 10; i++) {
    for(let c =0; c < i; c++) {
        str += i + '';
    }
    str += '\n';
}


console.log(str);

for(let num = 100; num > 0; num = num - 5){
    console.log(num);
}





