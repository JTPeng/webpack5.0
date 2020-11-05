const { resolve } = require('path')

const sum = (a, b) => {
  return a + b
}

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log(123)
    resolve()
  }, 1000)
})
console.log(promise)
console.log(sum(2, 5))
