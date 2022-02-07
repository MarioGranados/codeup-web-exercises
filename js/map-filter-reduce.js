const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLan = users.filter( n => {
    return n.languages.length < 3
})

console.log(threeLan)

let emailAddress = users.map( n => {
    return n.email;
})

console.log(emailAddress);


let years = users.map(n => {
    return n.yearsOfExperience
}, [])
console.log(years);

let yearsTotal = years.reduce((first, next) => {
    return ((first + next) / 7);
});
console.log(yearsTotal);

let largestEmail = emailAddress.reduce( (first, next) => {
/*    if (first.length > next.length) {
        return first;
    } else {
        return next;
    }*/
    return first.length > next.length ? first : next;
})
console.log(largestEmail)

let name = users.map(n => {
    return n.name;
}, []);
console.log(name);

let allNames = name.reduce( (first, next) => {
    return first + ' ' + next;
})
console.log(allNames)