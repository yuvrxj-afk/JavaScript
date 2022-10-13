// const { reject } = require('async')

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!')
        }, 1500)
    })
    return promise
}

setTimeout(() => {
    console.log('Timer is ded!')
    fetchData()
        .then(text => {
            console.log(text)
            return fetchData()
        })
        .then(text2 => {
            console.log(text2)
        })
}, 2000)

console.log('HIHIHIHIH')
console.log('IH')