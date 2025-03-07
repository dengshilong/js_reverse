var cookie_cache = document.cookie;
Object.defineProperty(document, 'cookie', {
    get: function() {
        debugger;
        console.log('Getting cookie');
        return cookie_cache;
    },
    set: function(val) {
        debugger;
        console.log('Setting cookie', val);
        var cookie = val.split(";")[0];
        var ncookie = cookie.split("=");
        var flag = false;
        var cache = cookie_cache.split("; ");
        cache = cache.map(function(a){
            if (a.split("=")[0] === ncookie[0]){
                flag = true;
                return cookie;
            }
            return a;
        })
        cookie_cache = cache.join("; ");
        if (!flag){
            cookie_cache += cookie + "; ";
        }
        this._value = val;
        return cookie_cache;
    },
});