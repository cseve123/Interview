// this的使用
function fn(){
    console.log(this)
}

fn() // window

fn.call({x:100}) // {x: 100}

const fn1 = fn.bind({x:200}) // 返回一个新的函数
fn1() // {x:200}
// this的值是在执行的时候确定的

const zhangsan = {
    name: '张三',
    sayHi() {
        // thisj即当前对象
        console.log(this)
    },
    wait() {
        setTimeout(()=> {
            // 自身没有this，取定义的上级作用域值
            console.log(this)
        })
    }
}

class People {
    constructor(name) {
        // class里的this是实例值
        this.name = name;
    }
    sayHi() {
        console.log(this)
    }
}
const person = new People();
person.sayHi();

let a
for(let i=0;i<10;i++) {
    a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function (e) {
       e.preventDefault()
       alert(i)
    })
    document.body.appendChild(a);
}


// 自定义bind
Function.prototype.bind1 = function () {
    // 参解析为数组
    const args = Array.prototype.slice.call(arguments)
    // 获取this
    const t = args.shift()
    const self = this // 当前函数
    console.log('当前', self)
    return function () {
        console.log('args', args)
        return self.apply(t, args)
    }
}
const f3 = fn.bind1({x:300}, 1,2)
console.log(f3())

function a1 (m, n, o) {
    console.log('arguments', arguments)
    console.log(this.name + ' ' + m + ' ' + n + ' ' + o);
}
const b3 = {
    name: 'kong'
}
const b4 = a1.bind1(b3, 7, 8, 9)
b4()