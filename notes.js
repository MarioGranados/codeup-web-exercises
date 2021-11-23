let isAtBar = true,
    bac = .07,
    age = 22,
    cashOnHand = 7.32;

let canHaveADrink = (bac < .08 && age >= 21 && cashOnHand > 5.00);

if (isAtBar && canHaveADrink) {
    console.log('cheers mate!');
}
else if (!isAtBar && canHaveADrink) {
    console.log("Cheers mate, heres a to go cup");
}
else {
    console.log('sorry mate, you can\'t have a drink');
}
console.log(canHaveADrink);