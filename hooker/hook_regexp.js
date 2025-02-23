RegExp.prototype.my_test = RegExp.prototype.test

let my_regex = function(arguments) {
    debugger ;
    console.log(this, arguments)
    if (this.source == `test`) {
        return true
    }
    return this.my_test(arguments)
}

Object.defineProperty(RegExp.prototype, 'test', {
    value: my_regex
})