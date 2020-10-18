// DOM 节点获取
// const div1 = document.getElementById('div') // 元素
// const divList = document.getElementsByTagName('div') // 集合
// const containerList = document.getElementsByClassName('.container')
const plist = document.querySelectorAll('p')

const [ p1 ] = plist;
// property形式
p1.style.width = '100px'
console.log(p1.style.width)

// attribute
p1.setAttribute('data-name', 'immo')
console.log(p1.getAttribute('data-name'))