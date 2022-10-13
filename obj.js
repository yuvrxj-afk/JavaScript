const person = {
    username: 'Max',
    age: 29,
    greet() {
        console.log('hi,I am ' + this.username)
    }
}
const tcopied = {...person }
console.log(tcopied)

const hobbies = ['sports', 'cooking']
    // for (let hobby of hobbies) {
    //     console.log(hobby)
    //     // }
    // console.log(hobbies)
    // console.log(hobbies.map(hobby => 'Hobby: ' + hobby))

const copied = [...hobbies]

console.log(copied)