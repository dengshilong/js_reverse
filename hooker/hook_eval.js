window.__eval = window.eval
var myeval = function(src) {
    debugger ;
    console.log('=======eval====')
    return window.__eval(src)
}
Object.defineProperty(window.prototype, 'eval', {
    value: myeval
})