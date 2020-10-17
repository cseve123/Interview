// eventloop 事件循环和轮询
console.log('Hi')
setTimeout(function cb1() {
    console.log('cb1')
}, 1000)
console.log('Bye')

// DOM也使用异步回调，事件循环
console.log('Hi')
document.getElementById('btn1').addEventListener('click', () => {
    console.log('button clicked')
}, false)
console.log('Bye')