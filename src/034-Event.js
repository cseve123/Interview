// 事件
// 事件绑定
// 事件冒泡
// 事件代理

// 绑定
// 通用事件绑定函数
function bindEvent(elem, type, fn) {
    // false 用事件冒泡， true使用事件捕获
    elem.addEventListener(type, fn, false)
}

function bindEvent2(elem, type, selector, fn) {
    if (fn == null) {
        fn = selector
        selector = null
    }
    elem.addEventListener(type, event => {
        if (selector) {
            if (target.matches(selector)) {
                fn.call(target, event)
            }
        } else {
            fn.call(target, event)
        }
    })
}

const btn = document.getElementById('btn1')
// btn.addEventListener('click', ()=> {
//     console.log('clicked',  this)
// })
bindEvent(btn1, 'click', event => {
    console.log(event.target) // 触发元素
    // event.preventDefault() // 阻止默认事件
    // event.stopPropagation() // 阻止事件冒泡
    alert('clicked')
})

// 事件代理
bindEvent(div1, 'click', ev => {
    ev.preventDafault()
    const target = ev.target // 事件代理
    if (target) {
        alert(target.innerHTML)
    }
})



