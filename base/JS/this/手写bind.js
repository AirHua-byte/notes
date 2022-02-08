// fn1.__proto__ === Function.prototype
function fn1(a, b) {
  console.log(this);
  console.log(a, b);
  return a + b
}

Function.prototype.bind1 = function() {
  // 参数拆解为数组
  const args = Array.prototype.slice.call(arguments)
  
  // 获取this 
  const t = args.shift()

  // fn1.bind(...) 中的fn1
  const self = this

  return function() {
    return self.apply(t, args)  
  }
}
const fn2 = fn1.bind1({ name: 'airhua' }, 10, 20)
console.log(fn2());