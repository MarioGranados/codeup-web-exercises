let num = prompt('Enter a number');
let i = 1;
while (i < 50) {
    i+=2;
    if (num != i) {
        console.log(i);
    } else {
        console.log('breaking');
        continue;
    }
}