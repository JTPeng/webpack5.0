console.log('index.js文件加载了')
const sum = (a, b) => a + b
const promise = new Promise(() => {
  setTimeout(() => {
    console.log('promise')
  }, 1000)
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('serviceWorker注册成功!')
      })
      .catch(() => {
        console.log('serviceWorker注册失败!')
      })
  })
}

document.getElementById('btn').onclick = function () {
  import('./js/test')
    .then(({ count }) => {
      console.log(count(1, 2, 3))
    })
    .catch(() => {
      console.log('error')
    })
}
