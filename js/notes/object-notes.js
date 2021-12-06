/*let person = {}; //This is the way to properly do it

let array = [1,2,3,true,false];

console.log(array)

//let person = new Object();

console.log(person);

const newPropertyName = 'firstName';

person[newPropertyName] = 'Matt Lewis'; // can assign dynamically
person.birthday = 'Sep,22'; //this is more common
person.isTall = true;

console.log(person);*/
/*let birthdayObject = {
    month: 'November',
    day: 22,
    year: 1997,
    getDetails: function (){
    return this.month + ' , ' + this.day + ' ' + this.year //this is a method
    }
}

let person = {
    name: 'Jack',
    birthday: birthdayObject,
    isTall: false
}

console.log(
    person.birthday
);*/

/*function createPerson(name) {
    return {
        firstName: name,
        greeting: function () {
            console.log('Hello, my name is' + createPerson.name);
        }
    }

}

let personTwo = createPerson('Laura');
let personThree = createPerson('ry');


console.log(personThree)*/

let dog = {
    breed: "Husky",
    colors: ["brown", 'Black', 'White'],
    sex: 'F',
    name: 'Luna',
    isFoofer: true,
    bark: function (loud) {
        if (loud) {
            return 'WOOF WOOF!!!!';
        } else {
            return 'ruff ruff';
        }
    },
    getDetails: function () {
        return this.colors[0] + ' ' + this.breed + ' named ' + this.name;
    },
};


function createDog(name, colors, breed) {
    return {
        breed: breed,
        colors: colors,
        sex: 'f',
        name: name,
        isFoofer: true,
        bark: function (loud) {
            if (loud) {
                return 'WOOF WOOF!!!!';
            } else {
                return 'ruff ruff';
            }
        },
        getDetails: function () {
            return this.colors[0] + ' ' + this.breed + ' named ' + this.name;
        }

    }
}



console.log(createDog('Gatsby', 'black', 'mini-aussie'));

let collectionOfDogs = [];

collectionOfDogs.push(createDog('Gatsby', 'black', 'mini-aussie'));
collectionOfDogs.push(createDog('Bobby', 'black', 'german shephard'));
collectionOfDogs.push(createDog('Dobbie', 'black', 'chihuawa'));
collectionOfDogs.push(createDog('Luna', 'brown', 'mini-aussie'));
collectionOfDogs.push(createDog('Princess', 'white', 'mini-aussie'));

collectionOfDogs.forEach(function (dog) {
    console.log(dog);
})

console.log(collectionOfDogs[1].bark());
