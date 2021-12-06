(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {};
    person.firstName = 'Mario',
        person.lastName = 'Granados';


    console.log(person.firstName + ' ' + person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = (function () {
        return "hello " + ' ' + this.firstName + ' ' + this.lastName;
    });
    console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    //This goes throught every shoppers amount and name;
    shoppers.forEach(function (shopper) {
        if (shopper.amount > 200) {
            console.log('-----------------------------')
            console.log(shopper.name + ' your total is ' + shopper.amount);
            shopper.amount = shopper.amount - (.12 * shopper.amount); //12 %
            console.log('after a 12% discount your new total is:  ' + shopper.amount);
        } else {
            console.log('----------------------')
            console.log(shopper.name + ' you did not get any discounts');
            console.log('your total is: ' + shopper.amount);
        }

    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {author: {firstName: 'Douglas', lastName: 'Adamns'}, title: 'the can in the hat'},
        {author: {firstName: 'Mike', lastName: 'Wasaski'}, title: 'The ocean Blue'},
        {author: {firstName: 'Mario', lastName: 'Luigi'}, title: 'Whiskers'},
        {author: {firstName: 'Matthew', lastName: 'Sosa'}, title: 'Led Zeppelin'},
        {author: {firstName: 'Edgar', lastName: 'Prince'}, title: 'Of Mice & Men'}
    ];

    console.log(books[0].author.firstName);
    console.log(books[1].author.firstName);
    console.log(books[books.length - 1].title);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    let i = 1;
    books.forEach(function (book) {
        console.log('-----------------')
        let name = book.author.firstName + ' ' + book.author.lastName;
        console.log('Book Number ' + i);
        console.log('author name: ' + name);
        console.log('book title:  ' + book.title);
        console.log('----------------')
        i++
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, firstName, lastName) {
        return {
            title: title,
            firstName: firstName,
            lastName: lastName
        }

    }


    function showBookInfo(obj) {
        console.log(obj);
    }

    let bookCollection = [];
    bookCollection.push(createBook('The Devil Wears Prada', 'SpongeBob', 'SquarePants'));
    bookCollection.push(createBook('..No This is Patrick', 'Patrick', 'Stary'));

    console.log(bookCollection);

})();