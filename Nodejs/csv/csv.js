const fs = require('fs');

fs.readFile('kevin.csv', show);

function show(err, data) {
    let lines = data.toString().split('\n');

    let obj = [];
    for(line of lines) {
        let splitted = line.split(',');
        obj.push({
            name: splitted[0],
            age: splitted[1],
            status: splitted[2]
        })
    }

    for(person of obj) {

        console.log(person.name, person.age)

    }
    console.log(obj)
}