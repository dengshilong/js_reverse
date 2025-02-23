String.prototype.my_search = String.prototype.search;

let my_search = function(arguments) {
    debugger ;
    console.log(this, arguments)
    if (arguments == '(((.+)+)+)+$') {
        return false;
    }
    return this.my_search(arguments)
};

Object.defineProperty(String.prototype, 'search', {
    value: my_search
});