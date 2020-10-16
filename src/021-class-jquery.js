// 简易jQuery
class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector);
        const length = result.length
        for (let i = 0;i<length; i++) {
            this[i] = result[i]
        }
        this.length = length
    }
    get(index) {
        return this[index];
    }
    each(fn) {
        for(let i=0;i<this.length;i++) {
            const elem = this[i]
            fn(elem)
        }
    }
    on(type, fn) {
        return this.each(elem => {
            elem.addEventListener(type, fn, false)
        })
    }
}

// 插件形式扩展
jQuery.prototype.dialog = function (info) {
    alert(info)
}

// 造轮子形式扩展
class myJQuery extends jQuery {
    constructor(selector) {
        super(selector)
    }
    // 扩展自己的方法
    addClass(className) {}
    style(data) {}
}

const $ = new jQuery('p');
console.log($.get(1))
$.each(elem => console.log(elem.nodeName))
$.on('click', ()=> alert('clicked'))
console.log($.dialog('abc'))
