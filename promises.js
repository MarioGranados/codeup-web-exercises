let APIKEY = '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';
let url = 'https://api.github.com/users/tater/events'

"use strict";


function getGithubUsernames(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': APIKEY}})
        .then(response => response.json())
        .then(responseObj => console.log(responseObj[0].created_at))
}

getGithubUsernames('MarioGranados')


    let wait = num => new Promise( (resolve, reject) => {
        if(num === 0) {
            reject();
        } else {
            setTimeout(function () {
                resolve();
            }, num)
        }
    })


wait(1000).then( () => console.log('You\'ll see this after 1 second'));
wait(3000).then( () => console.log('You\'ll see this after 3 seconds'));