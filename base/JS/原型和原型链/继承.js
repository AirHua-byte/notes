// 父类
class Person {
  constructor(name) {
    this.name = name
  }
  Hello() {
    console.log(`hello, my name is ${ this.name }`);
  }
}

// 子类
class Student extends Person {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  getAge() {
    console.log(this.age);
  }
}

let airhua = new Student('airhua', 20)
airhua.getAge()

console.log(airhua.__proto__); // 隐式原型
console.log(Student.prototype); // 显式原型
console.log(Student.prototype === airhua.__proto__); // true
console.log(Student.prototype.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true