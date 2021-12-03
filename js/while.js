/*let number = 2;
while (number <= 65536) {
    console.log(number);
    number *= 2;
}*/

//do while excersisce

var allCones = Math.floor(Math.random() * 50) + 50;
var conesBought;
console.log('I have ' + allCones + ' Cones')
do {
    conesBought = Math.floor(Math.random() * 5) + 1;

    if(conesBought > allCones) {
        console.log("I can't sell you " + conesBought + ' cones ' + ' When I only have ' + allCones + ' cones.')
    } else {
        console.log('cones sold : ' + conesBought);
        allCones = allCones - conesBought;
        console.log('-------------------------------')
        console.log('cones left : ' + allCones);
    }
}
while (allCones > 0);

console.log("i'm all sold out! Lets go home!")
