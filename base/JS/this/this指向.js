/* let show = function() {
  console.log(this);
}

// 普通函数
show()
// call bind
show.call({ name: 'airhua' })
show.bind({ name: 'air' })() */


// 箭头函数
/* const person = {
  name: 'airhua',
  sayHi() {
    console.log(this); // 当前对象
  },
  wait() {
    setTimeout(function() {
      console.log(this); // window
    })
  }
}
person.wait() */

const person = {
  name: 'airhua',
  sayHi() {
    console.log(this); // 当前对象
  },
  wait() {
    setTimeout(() => {
      console.log(this); // 当前对象
    })
  }
}
// 箭头函数this指向上级作用域this
person.wait()

// 对象构造函数调用
/* function Boy(name, age) {
  this.name = name
  this.age = age
  // return new Date()
}
let p = new Boy('airhua', 20)
console.log(p); */
