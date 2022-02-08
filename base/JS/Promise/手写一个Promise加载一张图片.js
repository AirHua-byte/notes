function loadImg(src) {
  const p = new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      const err = new Error('图片加载失败')
      reject(err)
    }
    img.src = src
  })
  return p
}

const url = 'https://assets.huabyte.com/blog/image/cover1.jpg'
loadImg(url).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})