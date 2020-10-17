// 异步的学习
// 异步是因为单线程而产生的，主要用于网络请求、定时任务
console.log(1)
setTimeout(function() {
    console.log(2)
}, 1000)
console.log(3)
setTimeout(function() {
    console.log(4)
}, 0)
console.log(5)
// 1 3 5 4 2