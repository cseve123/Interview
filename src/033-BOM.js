// navigator
// 浏览器信息
const ua = navigator.userAgent
const isChrome = ua.indexOf('Chrome')
console.log(navigator.userAgent, isChrome)

// screen
console.log(screen.width)

// location
console.log(location.href)
console.log(location.protocol)
console.log(location.pathname)
console.log(location.search)
console.log(location.hash)

// history
history.back()
history.forward()