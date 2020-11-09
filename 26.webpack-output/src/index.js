// import add from './add.js'

import('./add.js').then(({ default: add }) => {
  console.log('111')
})

console.log('2323')
