(function () {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI * Math.pow(this.radius, 2);

            // TODO: return the proper value
        },


        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            if (doRounding) {
                return Math.round(this.getArea());

            } else {
                return this.getArea();
            }


            // console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    console.log(`area of the circle is : ${circle.getArea()}`);

    // log info about the circle
    console.log("Raw circle information");
    console.log(circle.logInfo(false));
    //circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true))
    // circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    //circle.logInfo(false);
    console.log(circle.logInfo(false));
    console.log("Circle information rounded to the nearest whole number");
    //  circle.logInfo(true);
    console.log(circle.logInfo(true));
})();


(function () {
    let user = {
        username: 'Mario',
        password: 'Password',
        verifyUser: function (name, pass) {
            if (this.username === name && this.password === pass) {
                return 'success';
            } else {
                return 'error';
            }
        }

    };
    console.log(user.verifyUser('Mario', 'Password'))

})();


//

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    const randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber);
}

console.log(getRandomArbitrary(5, 10))
console.log(getRandomInt(5, 10))

