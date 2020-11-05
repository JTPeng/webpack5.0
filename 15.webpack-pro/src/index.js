import './css/a.css'
import './css/b.less'
import './css/iconfont.css'

const sum = (a, b) => {
  return a + b
}
const promise = new Promise(() => {
  setTimeout(() => {
    console.log('promise')
  }, 1000)
})

console.log(sum(3, 5))
console.log(promise)
