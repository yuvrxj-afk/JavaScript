var name = 'MAX'
var age = 29
var hasHobby = true

function summUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and has hobby : ' +
        userHasHobby
    )
}

console.log(summUser(name, age, hasHobby))