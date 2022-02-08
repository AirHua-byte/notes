// 函数作为返回值
function create() {
  const a = 100
  return function () {
    console.log(a);
  }
}

const fn = create()
const a = 200
fn() // 100

// 函数作为参数被传递
function print(fn) {
  const b = 200
  fn()
}

const b = 100

function fn() {
  console.log(b);
}
print(fn) // 100

for (var i = 0; i < 4; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i)
    }, 0)
  })(i)
}