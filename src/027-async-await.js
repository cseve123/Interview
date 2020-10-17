// async/await已同步的方式去实现异步,彻底解决回调问题
const url1 = 'https://img3.mukewang.com/5a9fc8070001a82402060220-100-100.jpg'
const url2 = 'https://static.52pojie.cn/static/image/common/logo.png'

// 解决回调地狱
function loadImg(src) {
    return new Promise((resolve, reject) => {
        // pending
        const img = document.createElement('img')
        img.onload = () => {
            resolve(img) // resolved
        }
        img.onerror = () => {
            reject(new Error(`图片加载失败 ${src}`)) // rejected
        }
        img.src = src;
    })
}

async function loadImg1 () {
    const img = await loadImg(url1)
    return img
}

async function loadImg2 () {
    const img = await loadImg(url2)
    return img
}

// (async function () {
//     const img1 = await loadImg1()
//     console.log(img1.height, img1.width)
//     const img2 = await loadImg2()
//     console.log(img2.height, img2.width)
// })()

// async 返回的是promise
async function fn1 () {
    return 100
}
const res1 = fn1()
console.log('res1', res1) // Promise
res1.then((res)=> {
    console.log(res)
})

// awati 相当于promise的then
!(async function() {
    const p1 = Promise.resolve(300)
    // const data = p1 // Promise
    const data = await p1 // await = p1.then()
    console.log('data', data);
})()

!(async function() {
    const data = await 400 // 400 = Promise.resolve(400) + await(就是.then)
    console.log(data);
})()

// try catch拦截promise的错误
// !(async function() {
//     const p = Promise.reject('错误捕获err') // rejected
//     try {
//         const res = await p
//     } catch (ex) {
//         console.error(ex)
//     }
// })()

!(async function () {
    const p4 = Promise.reject('errrrr')
    console.log('1111111111111111111111')
    const res4 = await p4 // p4状态reject触发catch,但这里用try catch res没有结果返回
    console.log('res', res4) // 因为await代码的是then 所有不会执行没有结果
})()


