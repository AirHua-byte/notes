function createCache() {
  const data = {} // 私有成员
  return {
    set: function (key, value) {
      data[key] = value
    },
    get: function (key) {
      return data[key]
    }
  }
}

const boy = createCache()
boy.set('airhua', 20)
console.log(boy.get('airhua'));

