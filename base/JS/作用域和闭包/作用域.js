/* {
  let a = 100
  var b = 200
  
}
console.log(b); // 200 变量提升
console.log(a); // error

function fun() {
  let c = 100
  var d = 200
}

console.log(c); // error
console.log(d); // error */

let func = function () {
  let a = 'airhua';
  let func1 = function () {
    a += ' a';
    console.log(a);
  }
  return func1;
}

let func2 = func()
func2()
func2()
func2()
