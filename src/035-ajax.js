// Ajax
const xhr = new XMLHttpRequest()
xhr.open("GET", "./src/data/tes.json", true)
// xhr.open("POST", "/login", true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 2000) {
            console.log(xhr.responseText)
        } else {
            console.log('其他情况')
        }
    }
}
xhr.send(null)
// post
// xhr.send({
//     name: 'xxx',
//     age: 11
// })


// JSONP
// 利用script.src来跨域资源
// 先定义方法
// server 带数据调用方法
`
<script>
window.callback = function (data) {
    console.log(data)
}
</script>
<script src='https://imooc.com/getAPi'></script>
`
// imooc.com返回 callback({x: 100, y: 299})

// 手写
function ajax (url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET',url,true)
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.stringify(xhr.responseText))
            } else {
                reject(new Error('err'))
            }
        }
        xhr.send(null)
    })
}