// onload执行在页面渲染完成包换图片视频的加载完成
// DOMContentLoad DOM渲染完就可以执行 ，不用等图片等是否加载完

const img = document.getElementById('img1')
img.onload = function () {
    console.log('img loaded')
}
window.addEventListener('load', function () {
    console.log('window loaded')
})
document.addEventListener('DOMContentLoaded', function () {
    console.log('dom content loaded')
})