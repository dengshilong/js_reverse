_Function = Function;
Function.prototype.constructor = function(){
    if (arguments[0].indexOf('debugger') != -1){
    	//debugger;
    	return _Function('');
    }
    return _Function(arguments[0]);
};