// macrotask 和microtask
console.log(100)
// 宏任务
setTimeout(()=>{
    console.log(200)
})
// 微任务
Promise.resolve().then(() => {
    console.log(300)
})
console.log(400)
// 100 400 300 200 

// 同步执行完后会先做DOM渲染再做Eventloop
const $p1 = $('<p>文字1</p>')
const $p2 = $('<p>文字2</p>')
const $p3 = $('<p>文字3</p>')

$('#container').append($p1).append($p2).append($p3)
console.log('length', $('#container').children().length)
// alert(是同步执行的最后依据阻断了js执行和DOM渲染)
// alert('本次call stack结束，DOM结构已更新，但未触发渲染')
// 微任务DOM渲染前触发
Promise.resolve().then(()=> {
    console.log('length1',$('#container').children().length)
    alert('Promise then before DOM')
})

// 宏任务DOM渲染后触发
setTimeout(() => {
    console.log('length2',$('#container').children().length)
    alert('setTimeout after DOM')
})