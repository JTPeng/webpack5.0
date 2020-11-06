console.log('index.js文件加载了')
const sum = (a, b) => a + b
const promise = new Promise(() => {
  setTimeout(() => {
    console.log('promise')
  }, 1000)
})

document.getElementById('btn').onclick = function () {
  import('./js/test')
    .then(({ count }) => {
      console.log(count(1, 2, 3))
    })
    .catch(() => {
      console.log('error')
    })
}
