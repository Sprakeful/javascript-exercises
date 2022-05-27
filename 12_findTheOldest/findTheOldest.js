const findTheOldest = function(people) {
    let oldestPerson = people.reduce((lastPerson, nextPerson) => {
        let nextYOD = 0;
        let lastYOD = 0;
        if(!lastPerson.hasOwnProperty('yearOfDeath')) lastYOD = new Date().getFullYear();
        else lastYOD = lastPerson.yearOfDeath;
        
        if(!nextPerson.hasOwnProperty('yearOfDeath')) nextYOD = new Date().getFullYear();
        else nextYOD = nextPerson.yearOfDeath;

        if((lastYOD - lastPerson.yearOfBirth) > (nextYOD - nextPerson.yearOfBirth)) return lastPerson;
        else return nextPerson;
    });
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
