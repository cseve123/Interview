// 作用域特殊情况 闭包：函数作为参数传递；函数作为返回值返回
// 函数作为返回值
function create () {
    const a = 100
    return function () {
        console.log(a)
    }
}

const fn = create()
const a = 200
fn() // 100

// 函数作为参数被传递
const b = 100
function fn2() {
    console.log(b)
}
function print(fn) {
    const b = 200
    fn()
}
print(fn2); // 100 
// 闭包： 自由变量的查找是在函数定义的地方向上级作用域查找
// 不是在执行的地方

// 闭包使用，隐藏数据
function createCache() {
    const data = {}
    return {
        set: function(key, val) {
            data[key] = val
        },
        get: function(key) {
            return data[key]
        }
    }
}

const c = createCache()
c.set('name','ddd')
console.log(c.get('name'))