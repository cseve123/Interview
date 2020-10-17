// promise
const url = 'https://img3.mukewang.com/5a9fc8070001a82402060220-100-100.jpg'

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

loadImg(url).then(img => {
    console.log(img.width, img)
    return img
}).catch(err => {
    console.error(err);
})

// 三种状态
// pending -> resolved/rejected
const p1 = new Promise((resolve, reject)=> {})
console.log('p1', p1) // pending
const p2 = new Promise((resolve, reject) => {
    // pending
    setTimeout(() => {
        resolve(); // resolved
    })
})
console.log('p2', p2) // pending 异步完后就是resolved
setTimeout(()=>{console.log('p2', p2)}) // resolved
const p3 = new Promise((resolve, reject) => {
    reject();
})
console.log('p3', p3) // pending
setTimeout(()=>{console.log('p2', p2)}) // rejected

const p4 = Promise.resolve(100)
p4.then(data => { // resolve 只触发then
    console.log('data', data)
})
.catch(err => {
    console.log('err', err)
})

const p5 = Promise.reject(100)
p5.then(data => {
    console.log('data', data)
})
.catch(err => { // reject 只触发catch
    console.log('err', err)
})

// promise的then和catch连接问题 本质就是三种状态触发的机制问题
// then正常是resolved 里面有错误返回rejected
// catch正常是resolved 里面有错误返回rejected
Promise.resolve().then(()=> {
    console.log(1)
})
.catch(()=> {
    console.log(2)
})
.then(()=> {
    console.log(3)
})
// 1 3

Promise.resolve().then(()=>{
    console.log(1)
    throw new Error('error1')
})
.catch(()=> {
    console.log(2)
})
.then(() => {
    console.log(3)
})
// 1 2 3

Promise.resolve().then(()=> {
    console.log(1)
    throw new Error('error1')
})
.catch(() => {
    console.log(2)
})
.catch(()=> {
    console.log(3)
})
// 1 2

// Promise 和 setTimeout顺序
// then是微任务
console.log(100)
setTimeout(()=> {
    console.log(200)
})
Promise.resolve().then(()=>{
    console.log(300)
})
console.log(400)
// 100 400 300 200