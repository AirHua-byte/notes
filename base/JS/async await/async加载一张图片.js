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

;
(async function () {
  try {
    const img = await loadImg(url)
    console.log(img);
  } catch (ex) {
    console.log(ex);
  }
})()