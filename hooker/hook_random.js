old_random = Math.random
window.Math.random =  Math.random = function () {
        return 0.3
 };
 
let timeStamp = 1661986251253;
Date.now = function now() { return  timeStamp};
Date.parse = function () { return timeStamp };
Date.prototype.valueOf = function () { return timeStamp };
Date.prototype.getTime = function () { return timeStamp };
Date.prototype.toString = function () { return timeStamp };
Performance.prototype.now = function now(){ return Number(('' + timeStamp).slice(8))}

Math.random = function random() { return 0.08636862211354912 };
window.crypto.getRandomValues = function getRandomValues(array32, ...args){
 return array32;
}