

Object.freeze(console)
console.log = function log(t) {
}
console.log('ssss')
console.log(Object.isFrozen(console))