const jsdom = require("jsdom");  // 引入 jsdom
const { JSDOM } = jsdom;  // 引出 JSDOM 类， 等同于 JSDOM = jsdom.JSDOM
const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
const resourceLoader = new jsdom.ResourceLoader({
  userAgent: userAgent
});
let dom = new JSDOM(``, {
    url: "https://example.org/",
    referrer: "https://example.com/",
   resources: resourceLoader,
});
window = dom.window;
debugger;
console.log(window.navigator.userAgent);
console.log('test _globalObject', (typeof window._globalObject != "undefined" && typeof window != "undefined" && window._globalObject == window) === false);
console.log('test document ', window.document.toString() === '[object HTMLDocument]')
console.log('test open ', window.open.toString() === 'function open() { [native code] }')
console.log('test fetch ', window.fetch !== undefined)
console.log('test prompt ', window.prompt.toString() === 'function prompt() { [native code] }')
console.log('test Event ', window.Event.toString() === 'function Event() { [native code] }')
console.log('test Request', window.Request !== undefined)
console.log('test XPathException',  window.XPathException === undefined)
console.log('test webdriver ', window.navigator.webdriver === false)
console.log('test webdriver ', (Object.getOwnPropertyDescriptor(window.navigator.__proto__, 'webdriver') && Object.getOwnPropertyDescriptor(window.navigator.__proto__, 'webdriver').get.toString()) === 'function get webdriver() { [native code] }')
console.log('test document.all ', typeof window.document.all === 'undefined')
console.log('test document.all ', window.document.all !== undefined)
