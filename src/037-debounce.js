// 防抖-用户再结束或暂停时触发事件
const input1 = document.getElementById('input1')
let timer = null
// input1.addEventListener('keyup', function(){
//     if (timer) {
//         clearTimeout(timer)
//     }
//     // 输入停止后再多少秒触发
//     timer = setTimeout(()=>{
//         // 模拟触发
//         console.log(input1.value)
//         timer = null
//     }, 1000)  
// })

// 封装一下
function debounce(fn, delay = 500) {
    let timer = null

    return function() {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(()=> {
            fn.apply(this, arguments)
            timer = null  
        }, delay)
    }
}
input1.addEventListener('keyup', debounce(function () {
    console.log(input1.value, this)
}, 600))