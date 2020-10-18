// for of 配合async/await的异步遍历
function muti (num) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(num * num)
        }, 1000)
    })
}
const nums = [1, 2, 3]

// 同时输出
// nums.forEach(async (i) => {
//     const res = await muti(i)
//     console.log(res)
// })

!(async function () {
    for (let i of nums) {
        const res = await muti(i)
        console.log(res)
    }
})()