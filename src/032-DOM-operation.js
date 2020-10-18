// DOM节点操作
// 增、插入，子元素父元素，删除
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

// 新建节点
const p1 = document.createElement('p')
p1.innerHTML = 'this is p1'
// 插入节点
div1.appendChild(p1)

// 移动节点
const p2 = document.querySelectorAll('p')[1];
div2.appendChild(p2)
// 获取父元素
console.log(p2.parentNode)

// 获取子元素
const div1ChildNodes = div1.childNodes
const div1ChildNodesP = Array.prototype.slice.call(div1ChildNodes).filter(child=> {
    return child.nodeType === 1
})
console.log(div1ChildNodesP)

// 删除子元素
div1.removeChild(div1ChildNodesP[0])


// DOM性能
// 缓存查询
// for(let i =0;i<document.getElementsByClassName(p).length;i++){}
const pList = document.getElementsByClassName(p)
const length = pList.length
for(let i=0;i<length;i++){}

// 频繁操作缓存
// createDocuemtFragment
const frag = document.createDocumentFragment()
for(let x= 0;x<10;x++) {
    const li = document.createElement('li')
    li.innerHTML = `LIst item ${x}`
    frag.appendChild(li)
}
const ul = document.createElement('ul')
ul.appendChild(frag)