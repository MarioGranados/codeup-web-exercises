/*
let USA = {
    Texas: {
        size: 'big',
        flower: 'bluebonnet',
        bird: 'mockingbird',
        people: 30,

    }
}

console.log(USA);*/


let sirius = {
    //properties
    numStudents: 29,
    city: [
        'San Antonio', 'Houston',
        ['downtown', 'rim', 'north control', 'museum district'],
        'Dallas'
    ],
    inPerson: false,
    theRest: true,
    //methods store functions

    returnCity: function () {
        //do something
        return this.city[2][2];
    }
}

let city = sirius.returnCity();
console.log(city);

console.log(sirius.city[2][2]);
