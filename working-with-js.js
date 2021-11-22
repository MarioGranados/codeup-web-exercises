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

var sample = 'Hello, CodeUp';
sample.toUpperCase();
sample += " Students";
console.log(sample);

sample = sample.replace(" Students", " Class");
console.log(sample);

var indexC = sample.indexOf('C');
console.log(indexC);


console.log(sample.substring(indexC, sample.indexOf("p") + 1 ) );

