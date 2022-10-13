const person = {
    username: 'Max',
    age: 29,
    greet() {
        console.log('hi,I am ' + this.username)
    }
}

const printName = ({ username, age, greet }) =>
    console.log(username, age, greet)

printName(person)


const { username, age } = person;
console.log(username, age)