async function fn2() {
  return new Promise(() => {})
}
// console.log(fn2());

async function fn1() {
  return {
    boby: 'test'
  }
}
// console.log(fn1());
(async () => {
  const res = await fn1()
  console.log(res);
})()