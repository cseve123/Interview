async function async1 () {
    console.log('async1 start')
    await async2() // async2本质是promise await是async2().then
    // await 下面的代码看作是callback异步代码
    // 不管下面还是有多少的await 往下的都是异步
    console.log('async1 end')
    await async3()
        // 这个await 又嵌套一层第三论异步
        console.log('async1 end 2')
        await async4()
            // 这个 await 第四轮异步
            console.log('aync1 end 3')
}
async function async2 () {
    console.log('async2')
}
async function async3 () {
    console.log('async3')
}
async function async4 () {
    console.log('async4')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
}, 0)

async1();

new Promise(resolve => {
    console.log('promise1')
    resolve()
}).then(()=>{
    console.log('promise2')
})
console.log('scirpt end');
/**
 * 同步callback
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 *  */
/**
 * 异步micro queue 和 callback queue
 * 1的then undefined
 * asnyc1 end // 异步的
 * async3
 * promise2
 * async1 end 2
 * async4
 * async1 end 3
 * setTimeout
 */

//  同步代码执行完毕call stask清空
// 执行微任务
// （尝试触发DOM渲染）
// 触发Event Loop 执行宏任务
