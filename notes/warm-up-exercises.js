function findDuplicates(s) {
    let duplicate = 0;
    for (var i = 0; i < s.length; i++) {
        for(var j = 0; j < s.length; j++) {
            if(s[i] === s[j + i]) {
                duplicate++
            }
        }
        console.log(`there are ${duplicate} ${s[i]}`);
        duplicate = 0;
    }

}
let s = '42992338111134'

findDuplicates(s);