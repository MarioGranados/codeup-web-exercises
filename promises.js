let APIKEY = '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';
let url = 'https://api.github.com/users/tater/events'

fetch(url, {headers: {'Authorization': APIKEY}}).then(function (result) {
    console.log(result)
})


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