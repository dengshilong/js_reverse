function disableConsole() {
    var _0x2291d5 = (function () {
        var _0x56d0b1 = !![];
        return function (_0x2b4e73, _0x2ef7c2) {
            var _0x516d20 = _0x56d0b1 ? function () {
                if (_0x2ef7c2) {
                    var _0x227772 = _0x2ef7c2['apply'](_0x2b4e73, arguments);
                    _0x2ef7c2 = null;
                    return _0x227772;
                }
            } : function () {
            };
            _0x56d0b1 = ![];
            return _0x516d20;
        };
    }());
    var _0xdfcf0a = _0x2291d5(this, function () {
        var _0xdaa874;
        try {
            var _0x1dc7aa = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
            _0xdaa874 = _0x1dc7aa();
        } catch (_0x227896) {
            _0xdaa874 = window;
        }
        var _0x1ada4b = _0xdaa874['console'] = _0xdaa874['console'] || {};
        var _0x535465 = [
            'log',
            'warn',
            'info',
            'error',
            'exception',
            'table',
            'trace'
        ];
        for (var _0x117547 = 0x0; _0x117547 < _0x535465['length']; _0x117547++) {
            var _0x2ef285 = _0x2291d5['constructor']['prototype']['bind'](_0x2291d5);
            var _0x2b8368 = _0x535465[_0x117547];
            var _0x23ee8a = _0x1ada4b[_0x2b8368] || _0x2ef285;
            _0x2ef285['__proto__'] = _0x2291d5['bind'](_0x2291d5);
            _0x2ef285['toString'] = _0x23ee8a['toString']['bind'](_0x23ee8a);
            _0x1ada4b[_0x2b8368] = _0x2ef285;
        }
    });
    _0xdfcf0a();
    console['log']('Hello\x20World!');
    return {"test": "test"}
}
module.exports = {disableConsole};
