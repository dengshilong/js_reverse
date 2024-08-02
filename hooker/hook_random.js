old_random = Math.random
window.Math.random =  Math.random = function () {
        return 0.3
 };