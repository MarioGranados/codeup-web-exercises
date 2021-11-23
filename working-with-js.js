var a = 1;
var b = a++;
var c = ++a;
console.log(a + b + c);
// what is the value of a, b, and c?

var d = "hello";
var e = false;

d++;
e++;

console.log(d);
console.log(e);

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;

console.log(perplexed);

var price = 2.7;
price.toFixed(2);
console.log(price);

console.log(isNaN(0));

console.log(isNaN(1));

console.log(isNaN(""));

console.log(isNaN("string"));

console.log(isNaN("0"));

console.log(isNaN("1"));

console.log(isNaN("3.145"));

console.log(isNaN(Number.MAX_VALUE));

console.log(isNaN(Infinity));

console.log(isNaN("true"));

console.log(isNaN(true));

console.log(isNaN("false"));

console.log(isNaN(false));

// to illustrate why the isNaN() function is needed:
console.log(NaN == NaN);

console.log(!true);

console.log(!false);

console.log(!!true);

console.log(!!false);

console.log(!!0);

console.log(!!-0);

console.log(!!1);

console.log(!!-1);

console.log(!!0.1);

console.log(!!"hello");

console.log(!!"");

console.log(!!'');

console.log(!!"false");

console.log(!!"0");

//ex 1

var sample = 'Hello, CodeUp';
sample.toUpperCase();
sample += " Students";
console.log(sample);

sample = sample.replace(" Students", " Class");
console.log(sample);

var indexC = sample.indexOf('C');
console.log(indexC);


console.log(sample.substring(indexC, sample.indexOf("p") + 1));

// ex 2
var littleMermaid = 3,
    brotherBear = 5,
    hercules = 1,
    pricePerDay = 3,
    fullPrice = littleMermaid * pricePerDay + brotherBear * pricePerDay + hercules * pricePerDay;

console.log('total price is: ' + fullPrice);

//companies
var google = 400,
    facebook = 350,
    amazon = 380,
    total = facebook * 10 + google * 6 + amazon * 4;

console.log("total rate per hour: " + total.toFixed(2));

//student enrollment thing
var fullClass = false
var notConflict = true;
if (!fullClass && notConflict) {
    console.log("class is not full: continue to enroll");
} else {
    console.log('class is full: please wait for the next course');
}


//product
var item = 2,
    offer = false;
var productExp = item > 2 && !offer;
console.log(productExp);

//password
var username = 'codeup',
    password = 'notastrongpassword',
    passMaxLength = 5,
    userIn = 'Mario';


console.log(passMaxLength === password.length && userIn != username); // false
console.log(20 >= username.length); // true