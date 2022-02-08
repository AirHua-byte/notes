async function async1() {
  console.log('async start'); // 2
  await async2()
  console.log('async1 end'); // 相当于then回调 微任务 6
}

async function async2() {
  console.log('async2'); // 3
}
console.log('script start'); // 1

setTimeout(function () { // 宏任务
  console.log('setTimeout'); // 8
}, 0)

async1()

new Promise(function (resolve) {
  console.log('promise1'); // 4
  resolve()
}).then(function () { // 微任务 
  console.log('promise2'); // 7
})

console.log('script end'); // 5